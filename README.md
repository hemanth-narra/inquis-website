# Inquis Life Care Sciences — Docker & Tailscale Setup

This repository contains the containerized setup for the **Inquis Life Care Sciences** website with **Tailscale** integration.

Tailscale allows this website to be securely accessible across your private Tailnet (VPN) without exposing ports to the public internet, configuring router port-forwarding, or setting up complex VPN tunnels.

---

## Architecture Options

Two deployment options are provided:

1. **Docker Compose Sidecar (Recommended)**:
   - Uses the official `tailscale/tailscale` container.
   - The `web` container attaches directly to the Tailscale network namespace (`network_mode: service:tailscale`).
   - Clean separation of concerns, persists Tailscale auth state in a volume.
2. **Standalone All-in-One Container**:
   - Single Dockerfile (`Dockerfile.standalone`) combining Tailscale and Nginx.
   - Ideal for platforms that only accept a single container (Fly.io, AWS ECS single task, Cloud Run, etc.).

---

## Quickstart: Docker Compose Sidecar (Recommended)

### 1. Generate a Tailscale Auth Key
1. Go to your **[Tailscale Admin Console → Settings → Keys](https://login.tailscale.com/admin/settings/keys)**.
2. Click **Generate auth key**.
3. Options to consider:
   - **Reusable**: Recommended if you plan to recreate the container.
   - **Ephemeral**: Auto-removes the machine from your Tailnet if it goes offline.
   - **Tags** (optional): e.g. `tag:server` (requires ACL tag configuration in Tailscale).
4. Copy the auth key (starts with `tskey-auth-...`).

### 2. Configure Environment Variables
Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Edit `.env` and set your key:
```env
TS_AUTHKEY=tskey-auth-your-real-key-here
TS_HOSTNAME=inquis-website
LOCAL_PORT=8080
```

> **Note on Windows / macOS Docker Desktop:**
> If `/dev/net/tun` is not supported on your host Docker daemon, set `TS_USERSPACE=true` in `.env`. On Linux hosts, keep `TS_USERSPACE=false`.

### 3. Build & Run
Start the containers in detached mode:

```bash
docker compose up -d
```

Check the status:

```bash
# Check container logs
docker compose logs -f

# Check Tailscale status inside the container
docker compose exec tailscale tailscale status
```

### 4. Access the Website

Once connected:
- **From any device on your Tailnet**:
  - Open `http://inquis-website` (via Tailscale MagicDNS)
  - Or open `http://<Tailscale-IP>` (e.g. `http://100.x.y.z`)
- **From your local Docker host machine**:
  - Open `http://localhost:8080`

---

## Enabling Tailscale HTTPS (Tailscale Serve vs Funnel)

Tailscale provides two ways to expose your website securely:

| Feature | Access Scope | URL |
|---|---|---|
| **Tailscale Serve** | **Private** (devices connected to your Tailnet only) | `https://inquis-website.<tailnet>.ts.net` |
| **Tailscale Funnel** | **Public** (anyone on the open internet) | `https://inquis-website.<tailnet>.ts.net` |

### 1. Tailscale Serve (Private HTTPS)
Exposes the site over HTTPS within your private Tailnet:
```bash
docker compose exec tailscale tailscale serve --bg 80
```
To check status:
```bash
docker compose exec tailscale tailscale serve status
```
To disable:
```bash
docker compose exec tailscale tailscale serve reset
```

---

### 2. Tailscale Funnel (Public Internet HTTPS)
Exposes the site securely to the **public internet** with automatic Let's Encrypt certificates:

#### Prerequisite: Enable Funnel in Tailscale ACLs
1. Open [Tailscale Admin Console → Access Controls](https://login.tailscale.com/admin/acls).
2. Ensure `nodeAttrs` grants Funnel permission:
   ```json
   "nodeAttrs": [
     {
       "target": ["autogroup:member"],
       "attr": ["funnel"]
     }
   ]
   ```
3. Enable **HTTPS Certificates** under [Tailscale Admin Console → DNS](https://login.tailscale.com/admin/dns).

#### Turn On Funnel
```bash
docker compose exec tailscale tailscale funnel --bg 80
```
*(Optionally specify target explicitly: `docker compose exec tailscale tailscale funnel --bg 443 on`)*

#### Check Funnel Status
```bash
docker compose exec tailscale tailscale funnel status
```

#### Turn Off Funnel
```bash
# Turn off Funnel on port 80 / 443
docker compose exec tailscale tailscale funnel 80 off

# Or reset all serve/funnel mappings
docker compose exec tailscale tailscale funnel reset
```

---

## Alternative: Standalone Single Container

If you prefer building and running a single container:

```bash
# Build the image
docker build -f Dockerfile.standalone -t inquis-website:tailscale .

# Run with userspace networking (works on any platform)
docker run -d \
  --name inquis-site \
  -e TS_AUTHKEY="tskey-auth-your-key-here" \
  -e TS_HOSTNAME="inquis-website" \
  -e TS_USERSPACE="true" \
  inquis-website:tailscale
```

Or run with host TUN device (Linux):
```bash
docker run -d \
  --name inquis-site \
  --device /dev/net/tun:/dev/net/tun \
  --cap-add=NET_ADMIN \
  --cap-add=NET_RAW \
  -e TS_AUTHKEY="tskey-auth-your-key-here" \
  -e TS_HOSTNAME="inquis-website" \
  -e TS_USERSPACE="false" \
  -v tailscale-state:/var/lib/tailscale \
  inquis-website:tailscale
```

---

## Project Structure

```text
inquis-website/
├── Dockerfile                 # Lightweight Nginx production image
├── Dockerfile.standalone      # All-in-one image (Tailscale + Nginx)
├── docker-compose.yml         # Tailscale sidecar architecture
├── nginx.conf                 # Nginx configuration (gzip, caching, security headers)
├── entrypoint.sh              # Startup script for standalone container
├── .dockerignore              # Files excluded from Docker context
├── .env.example               # Template for Tailscale auth key & hostname
├── README.md                  # Documentation
├── index.html                 # Inquis website homepage & catalog
├── script.js                  # Frontend application logic
├── style.css                  # Website styling
└── img/                       # Product images and assets
```

---

## Useful Commands

| Task | Command |
|---|---|
| View container status | `docker compose ps` |
| View logs | `docker compose logs -f` |
| View Tailscale status & IP | `docker compose exec tailscale tailscale status` |
| View Tailscale IP addresses | `docker compose exec tailscale tailscale ip` |
| Stop containers | `docker compose down` |
| Stop and remove state volume | `docker compose down -v` |
