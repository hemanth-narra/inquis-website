#!/bin/sh
set -e

# ========================================================
# Inquis Website + Tailscale Single-Container Entrypoint
# ========================================================

# Ensure required state directories exist
mkdir -p /var/run/tailscale /var/lib/tailscale

# Start tailscaled in background (userspace networking mode if no tun device)
if [ ! -c /dev/net/tun ] || [ "$TS_USERSPACE" = "true" ]; then
  echo "[tailscale] Starting tailscaled in userspace mode..."
  tailscaled --tun=userspace-networking --state=/var/lib/tailscale/tailscaled.state --socket=/var/run/tailscale/tailscaled.sock &
else
  echo "[tailscale] Starting tailscaled with tun device..."
  tailscaled --state=/var/lib/tailscale/tailscaled.state --socket=/var/run/tailscale/tailscaled.sock &
fi

# Wait for tailscaled daemon socket to be ready
echo "[tailscale] Waiting for tailscaled daemon to initialize..."
until tailscale --socket=/var/run/tailscale/tailscaled.sock status >/dev/null 2>&1 || [ $? -eq 1 ]; do
  sleep 0.5
done

# Authenticate with Tailscale if TS_AUTHKEY is provided
if [ -n "$TS_AUTHKEY" ]; then
  echo "[tailscale] Authenticating with Tailscale network..."
  tailscale --socket=/var/run/tailscale/tailscaled.sock up \
    --authkey="${TS_AUTHKEY}" \
    --hostname="${TS_HOSTNAME:-inquis-website}" \
    ${TS_EXTRA_ARGS}
  echo "[tailscale] Successfully joined Tailnet!"
else
  echo "[tailscale] WARNING: TS_AUTHKEY is not set. Tailscale will require manual interactive login via 'tailscale up'."
fi

# Start Nginx in foreground
echo "[nginx] Starting Nginx web server..."
exec nginx -g "daemon off;"
