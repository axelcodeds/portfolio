# Docker Usage Guide - Portfolio Angular App

## Building the Docker Image

### Basic build:

```bash
docker build -t portfolio:latest .
```

### Build with custom tag:

```bash
docker build -t portfolio:1.0.0 .
```

### Build for specific platform (for M1/M2 Macs or ARM):

```bash
docker build --platform linux/amd64 -t portfolio:latest .
```

---

## Running the Container

### Run on port 80:

```bash
docker run -d -p 80:80 --name portfolio portfolio:latest
```

### Run on custom port (e.g., 8080 → container port 80):

```bash
docker run -d -p 8080:80 --name portfolio portfolio:latest
```

### Run with environment-specific naming:

```bash
docker run -d -p 80:80 --name portfolio-prod --restart unless-stopped portfolio:latest
```

### Access the application:

- Local: `http://localhost`
- Custom port: `http://localhost:8080`

---

## Useful Docker Commands

### Check container status:

```bash
docker ps -a | grep portfolio
```

### View logs:

```bash
docker logs portfolio
docker logs -f portfolio  # Follow logs in real-time
```

### Stop the container:

```bash
docker stop portfolio
```

### Remove the container:

```bash
docker rm portfolio
```

### Rebuild without cache (force full rebuild):

```bash
docker build --no-cache -t portfolio:latest .
```

### Check image size:

```bash
docker images | grep portfolio
```

### Run interactive bash in container (for debugging):

```bash
docker run -it --rm portfolio:latest /bin/sh
```

---

## Multi-Stage Build Breakdown

### Stage 1: Builder (Node.js 22 LTS Alpine)

- Uses lightweight Alpine Linux base
- Installs dependencies with `npm ci` (clean install)
- Builds Angular app in production mode
- This stage is discarded in final image

### Stage 2: Runtime (Nginx 1.27 Alpine)

- Copies only the built static files from Stage 1
- Ultra-lightweight Nginx Alpine image
- Configured with security best practices
- Non-root user for improved security
- Health check endpoint included

---

## Configuration Details

### Dockerfile Features:

✅ Multi-stage build for minimal image size  
✅ Node.js 22 LTS Alpine (lightweight)  
✅ Nginx 1.27 Alpine (lightweight)  
✅ Security: Non-root user, security headers  
✅ Health check for container orchestration  
✅ Proper file permissions  
✅ Layer caching optimization

### nginx.conf Features:

✅ SPA routing support (try_files for Angular routing)  
✅ Gzip compression for faster delivery  
✅ Cache control for assets (30 days) and HTML (dynamic)  
✅ Security headers (CSP, X-Frame-Options, etc.)  
✅ Optimal worker processes for containers  
✅ Access and error logging

### .dockerignore Excludes:

✅ node_modules (rebuilt in container)  
✅ dist/ (rebuilt in container)  
✅ Development files (.env, .vscode, etc.)  
✅ Testing files (coverage, .karma, etc.)  
✅ CI/CD configs  
✅ Git/Version control files

---

## Performance Optimization

The final image should be approximately 50-100MB, including:

- Nginx lightweight binary
- Angular production build (dist/)
- Base Alpine Linux

### Typical build time: 2-5 minutes

(Depends on network speed and machine performance)

---

## Docker Compose Setup

### Available Compose Files

| File                          | Purpose                         | Use Case                        |
| ----------------------------- | ------------------------------- | ------------------------------- |
| `docker-compose.yml`          | Standard production setup       | Default production deployment   |
| `docker-compose.prod.yml`     | Production with resource limits | Strict resource management      |
| `docker-compose.dev.yml`      | Development with live reload    | Local development               |
| `docker-compose.advanced.yml` | With reverse proxy (Nginx)      | Load balancing, SSL termination |

### Quick Start with Docker Compose

#### Start the portfolio app:

```bash
docker-compose up -d
```

#### View logs:

```bash
docker-compose logs -f portfolio
```

#### Stop the app:

```bash
docker-compose down
```

#### Rebuild and start:

```bash
docker-compose up -d --build
```

---

### Standard Production Setup (`docker-compose.yml`)

Basic production configuration with health checks and restart policy:

```bash
# Start
docker-compose up -d

# Stop
docker-compose down

# View status
docker-compose ps

# View logs
docker-compose logs -f portfolio

# Restart service
docker-compose restart portfolio

# Remove all (containers + images)
docker-compose down -v
```

**Features:**

- Health check every 30s
- Automatic restart on failure
- JSON logging with rotation (10MB max, 3 files)
- Timezone set to UTC

---

### Production with Resource Limits (`docker-compose.prod.yml`)

For production environments with strict resource management:

```bash
# Start with production limits
docker-compose -f docker-compose.prod.yml up -d

# View stats
docker stats portfolio-prod

# Logs
docker-compose -f docker-compose.prod.yml logs -f
```

**Resource Limits:**

- CPU: 1 core (limit), 0.5 core (reservation)
- Memory: 512MB (limit), 256MB (reservation)

---

### Development Setup (`docker-compose.dev.yml`)

For local development with live rebuild:

```bash
# Start development environment
docker-compose -f docker-compose.dev.yml up

# Rebuild on code changes
docker-compose -f docker-compose.dev.yml up --build

# Stop
docker-compose -f docker-compose.dev.yml down
```

**Features:**

- Auto-rebuild on source changes
- Runs `npm start` for development server
- Mounts local code directory
- Volume for node_modules persistence

---

### Advanced Setup with Reverse Proxy (`docker-compose.advanced.yml`)

For production with Nginx reverse proxy:

```bash
# Start with reverse proxy
docker-compose -f docker-compose.advanced.yml up -d

# Both services running:
# - proxy (Nginx reverse proxy on port 80/443)
# - portfolio-app (internal app on port 80)
```

**Architecture:**

```
Client → Nginx Proxy (port 80) → Portfolio App (internal)
```

---

## Production Deployment

### With Kubernetes (Example):

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: portfolio
spec:
  replicas: 2
  selector:
    matchLabels:
      app: portfolio
  template:
    metadata:
      labels:
        app: portfolio
    spec:
      containers:
        - name: portfolio
          image: portfolio:latest
          ports:
            - containerPort: 80
          livenessProbe:
            httpGet:
              path: /
              port: 80
            initialDelaySeconds: 5
            periodSeconds: 10
          readinessProbe:
            httpGet:
              path: /
              port: 80
            initialDelaySeconds: 5
            periodSeconds: 5
```

---

## Docker Compose Management Commands

### Container Operations

```bash
# Start services
docker-compose up -d

# Start and rebuild images
docker-compose up -d --build

# Stop services
docker-compose stop

# Stop and remove containers
docker-compose down

# Restart services
docker-compose restart

# Pause services (without stopping)
docker-compose pause

# Resume paused services
docker-compose unpause
```

### Viewing Status and Logs

```bash
# List services and status
docker-compose ps

# Show container logs
docker-compose logs

# Follow logs in real-time
docker-compose logs -f portfolio

# View logs from last 100 lines
docker-compose logs --tail=100

# View logs from specific service
docker-compose logs portfolio

# View resource usage
docker-compose stats
```

### Maintenance

```bash
# Remove stopped containers
docker-compose rm

# Remove unused images
docker-compose down --rmi unused

# Remove all images (forced)
docker-compose down --rmi all

# Update dependencies
docker-compose pull

# Validate compose file
docker-compose config

# Show images
docker-compose images
```

### Scaling (for stateless services)

```bash
# Scale portfolio to 3 instances (note: adjust ports to avoid conflicts)
docker-compose up -d --scale portfolio=3

# View all running instances
docker-compose ps
```

---

## Using Environment Variables

Create a `.env` file to manage environment-specific configuration:

```bash
# .env
PORTFOLIO_PORT=80
COMPOSE_PROJECT_NAME=portfolio
TIMEZONE=UTC
LOG_LEVEL=info
```

Then reference in `docker-compose.yml`:

```yaml
services:
  portfolio:
    ports:
      - '${PORTFOLIO_PORT}:80'
    environment:
      - TZ=${TIMEZONE}
```

Load with:

```bash
docker-compose --env-file .env up -d
```

---

## Docker Compose Best Practices

### 1. Use Version 3.8+

Ensures compatibility with modern Docker features.

### 2. Health Checks

```yaml
healthcheck:
  test: ['CMD', 'wget', '--quiet', '--tries=1', '--spider', 'http://localhost/']
  interval: 30s
  timeout: 3s
  retries: 3
  start_period: 5s
```

### 3. Resource Limits

```yaml
deploy:
  resources:
    limits:
      cpus: '1'
      memory: 512M
    reservations:
      cpus: '0.5'
      memory: 256M
```

### 4. Logging Configuration

```yaml
logging:
  driver: 'json-file'
  options:
    max-size: '10m'
    max-file: '3'
```

### 5. Restart Policies

```yaml
restart: unless-stopped # Restart unless manually stopped
```

Options:

- `no`: Don't automatically restart
- `always`: Always restart if stopped
- `unless-stopped`: Always unless manually stopped
- `on-failure`: Restart only on non-zero exit code

### 6. Use Named Volumes

```yaml
volumes:
  node_modules:
```

For persistent data across restarts.

### 7. Service Dependencies

```yaml
depends_on:
  - portfolio
```

Ensures services start in correct order.

---

## Monitoring and Debugging

### View Container Processes

```bash
docker-compose exec portfolio ps
```

### Execute Commands in Container

```bash
docker-compose exec portfolio sh
docker-compose exec portfolio ls -la /usr/share/nginx/html
```

### Inspect Network

```bash
docker-compose networks ls
docker network inspect portfolio_default
```

### View Container Logs with Timestamps

```bash
docker-compose logs --timestamps
```

### Tail Logs from Multiple Services

```bash
docker-compose logs -f
```

---

## CI/CD Integration

### GitLab CI Example

```yaml
deploy:
  stage: deploy
  image: docker:latest
  services:
    - docker:dind
  script:
    - docker build -t portfolio:latest .
    - docker-compose -f docker-compose.prod.yml up -d
  only:
    - main
```

### GitHub Actions Example

```yaml
- name: Start Docker Compose
  run: |
    docker build -t portfolio:latest .
    docker-compose -f docker-compose.prod.yml up -d
```

---

## Migration from Docker Run to Compose

**From:**

```bash
docker run -d -p 80:80 --name portfolio --restart unless-stopped portfolio:latest
```

**To:**

```bash
docker-compose up -d
```

Advantages of Compose:

- Declarative configuration
- Easy multi-container orchestration
- Version control friendly
- Repeatable deployments
- Better local/production parity

---

## Troubleshooting Compose

### Issue: Port already in use

```bash
# Find process using port
sudo lsof -i :80

# Use different port in .env or override
docker-compose -p 8080:80 up -d
```

### Issue: Service won't start

```bash
# Check logs
docker-compose logs portfolio

# Validate config
docker-compose config
```

### Issue: Out of disk space

```bash
# Clean up unused resources
docker system prune -a

# Remove old images
docker image prune -a
```

### Issue: Container keeps exiting

```bash
# Check exit code
docker-compose ps

# View full logs
docker-compose logs portfolio --tail=50
```

---

## Next Steps

1. **Build the image:**

   ```bash
   docker build -t portfolio:latest .
   ```

2. **Start with Docker Compose:**

   ```bash
   docker-compose up -d
   ```

3. **Verify it works:**

   ```bash
   curl http://localhost
   docker-compose ps
   ```

4. **View logs:**

   ```bash
   docker-compose logs -f
   ```

5. **Use production config:**

   ```bash
   docker-compose -f docker-compose.prod.yml up -d
   ```

6. **Push to registry (Docker Hub, ECR, etc.):**

   ```bash
   docker tag portfolio:latest your-registry/portfolio:latest
   docker push your-registry/portfolio:latest
   ```

7. **Deploy to production:**
   - Use `docker-compose.prod.yml` for single-server
   - Use `docker-compose.advanced.yml` for load balancing
   - Use Kubernetes for cloud-native deployments
   - Use ECS/Fargate for AWS
