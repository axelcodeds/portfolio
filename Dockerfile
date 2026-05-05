# Stage 1: Build stage using Node.js
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --prefer-offline --no-audit

# Copy source code
COPY . .

# Build Angular app in production mode
# For this SSR-enabled project, the browser build is in dist/portfolio/browser
RUN npm run build

# Stage 2: Runtime stage using Nginx (Alpine for minimal size)
FROM nginx:1.27-alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built Angular app from builder stage
# The browser build is the static SPA output
COPY --from=builder /app/dist/portfolio/browser /usr/share/nginx/html

# Set proper permissions for files
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

# Create nginx run directory with proper permissions
RUN mkdir -p /run/nginx && \
    chown -R nginx:nginx /run/nginx

# Expose port 80
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
