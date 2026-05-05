# Docker Compose Quick Reference

## 🚀 Quick Start

```bash
# Start services
docker-compose up -d

# Stop services
docker-compose down

# View status
docker-compose ps

# View logs
docker-compose logs -f
```

---

## 📋 File Selection

| Command                          | Use Case                          |
| -------------------------------- | --------------------------------- |
| `docker-compose.yml`             | Default production setup          |
| `-f docker-compose.prod.yml`     | Production with resource limits   |
| `-f docker-compose.dev.yml`      | Local development                 |
| `-f docker-compose.advanced.yml` | With reverse proxy/load balancing |

**Example:**

```bash
# Use production config
docker-compose -f docker-compose.prod.yml up -d
```

---

## 🔧 Common Commands

### Start/Stop

```bash
docker-compose up -d              # Start in background
docker-compose down               # Stop and remove
docker-compose restart            # Restart services
docker-compose pause              # Pause (don't stop)
docker-compose unpause            # Resume paused services
```

### Logs

```bash
docker-compose logs               # Show all logs
docker-compose logs -f            # Follow logs
docker-compose logs portfolio     # Service-specific
docker-compose logs --tail=50     # Last 50 lines
```

### Status

```bash
docker-compose ps                 # List services
docker-compose stats              # Resource usage
docker-compose config             # Validate config
docker-compose images             # Show images
```

### Maintenance

```bash
docker-compose pull               # Update images
docker-compose build              # Build images
docker-compose up -d --build      # Rebuild and start
docker-compose down -v            # Remove all (including volumes)
docker-compose rm                 # Remove stopped containers
```

---

## 🎯 Development Workflow

```bash
# Start dev environment
docker-compose -f docker-compose.dev.yml up

# Code changes trigger rebuild automatically

# View logs
docker-compose -f docker-compose.dev.yml logs -f

# Stop
docker-compose -f docker-compose.dev.yml down
```

---

## 🔐 Production Deployment

```bash
# Build image first
docker build -t portfolio:latest .

# Start with production config
docker-compose -f docker-compose.prod.yml up -d

# Verify
docker-compose -f docker-compose.prod.yml ps
docker-compose -f docker-compose.prod.yml logs

# Monitor
docker-compose -f docker-compose.prod.yml stats
```

---

## 🔍 Debugging

```bash
# View logs with timestamps
docker-compose logs --timestamps

# Execute command in container
docker-compose exec portfolio sh
docker-compose exec portfolio ls -la /usr/share/nginx/html

# Inspect network
docker network ls
docker network inspect portfolio_default

# Full logs
docker-compose logs portfolio --tail=100
```

---

## 📊 Scaling

```bash
# Scale service (for stateless apps)
docker-compose up -d --scale portfolio=3

# Check instances
docker-compose ps
```

---

## 🌍 Environment Variables

Create `.env` file:

```bash
PORTFOLIO_PORT=80
COMPOSE_PROJECT_NAME=portfolio
TIMEZONE=UTC
```

Usage:

```bash
docker-compose --env-file .env up -d
```

---

## ⚙️ Advanced

### Multiple Services (docker-compose.advanced.yml)

```bash
docker-compose -f docker-compose.advanced.yml up -d
# Runs: Nginx proxy + portfolio app
```

### Resource Limits (docker-compose.prod.yml)

```bash
docker-compose -f docker-compose.prod.yml up -d
# CPU: 1 core limit, 0.5 core reservation
# Memory: 512MB limit, 256MB reservation
```

### Custom Project Name

```bash
docker-compose -p myproject up -d
```

### Override Ports

```bash
docker-compose -p 8080:80 up -d
```

---

## 🆘 Troubleshooting

| Issue               | Solution                          |
| ------------------- | --------------------------------- |
| Port already in use | `docker-compose -p 8080:80 up -d` |
| Service won't start | `docker-compose logs service`     |
| Out of disk space   | `docker system prune -a`          |
| Stuck container     | `docker-compose restart`          |
| Config errors       | `docker-compose config`           |

---

## 📝 Comparison: docker run vs docker-compose

### Docker Run (Old Way)

```bash
docker run -d \
  -p 80:80 \
  --name portfolio \
  --restart unless-stopped \
  portfolio:latest
```

### Docker Compose (Better Way)

```bash
# Just run this:
docker-compose up -d

# Config is in docker-compose.yml
```

**Benefits of Compose:**

- Declarative config (version controlled)
- Easy to update
- Works across teams
- Better for multiple containers
- Cleaner management

---

## 🎓 Learn More

- Full guide: See `DOCKER_USAGE.md`
- Official docs: https://docs.docker.com/compose/
- Examples: Check `docker-compose*.yml` files
