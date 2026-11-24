# Inquis Life Care Sciences — Website & Docker Setup

Official website for **Inquis Life Care Sciences LLP** ([inquislifecaresciences.com](https://inquislifecaresciences.com/)) — Authorized Medical Equipment & Healthcare Solutions Distributor based in Hyderabad, India.

---

## Features

- **High-Performance Static Architecture**: Vanilla JS + CSS, optimized with Gzip compression and browser caching via Nginx.
- **Complete SEO Ready**:
  - `robots.txt` & XML `sitemap.xml` included.
  - Schema.org JSON-LD structured data (`MedicalBusiness`, `LocalBusiness`, `FAQPage`, `WebSite`).
  - Open Graph & Twitter Cards for rich link previews.
  - Semantic `<noscript>` crawler fallback covering all 36+ products and 8 equipment categories.
  - Dynamic browser title updates and shareable deep-links (`#product/<id>` and `#catalog/<category>`).
- **Containerized**: Production-grade `nginx:alpine` Docker setup with healthcheck.

---

## Running with Docker

### Option 1: Docker Compose (Recommended)

Start the website:
```bash
docker compose up -d --build
```

Access the site at `http://localhost`.

To view container status and logs:
```bash
docker compose ps
docker compose logs -f
```

To stop the container:
```bash
docker compose down
```

---

### Option 2: Docker CLI

Build the Docker image:
```bash
docker build -t inquis-website .
```

Run the container:
```bash
docker run -d --name inquis-website -p 80:80 --restart unless-stopped inquis-website
```

---

## Project Structure

```text
inquis-website/
├── Dockerfile          # Lightweight Nginx production image
├── docker-compose.yml  # Docker Compose configuration
├── nginx.conf          # Nginx config (Gzip, caching, security headers, healthcheck)
├── .dockerignore       # Files excluded from Docker builds
├── robots.txt          # Search engine crawler instructions
├── sitemap.xml         # XML sitemap with canonical links
├── README.md           # Documentation
├── index.html          # Main HTML structure, metadata & JSON-LD
├── script.js           # Client-side router, catalog data & UI logic
├── style.css           # Styling and design system
└── img/                # Product images and assets
```

---

## Port Configuration

If port `80` is in use on your host, you can map another port in `docker-compose.yml` (e.g. `"8080:80"`):

```yaml
services:
  web:
    build: .
    container_name: inquis-website
    ports:
      - "8080:80"
    restart: unless-stopped
```
Then access at `http://localhost:8080`.
