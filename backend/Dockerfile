# Photo Captioner Backend - Multi-stage Docker Build
# Base image: Node 18 Alpine for minimal size

# =============================================================================
# Stage 1: Builder - Install dependencies and compile TypeScript
# =============================================================================
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files first for better layer caching
COPY package*.json ./

# Install all dependencies (including dev for build)
RUN npm ci

# Copy source code
COPY tsconfig.json ./
COPY src ./src

# Build TypeScript to JavaScript
RUN npm run build

# =============================================================================
# Stage 2: Production - Minimal runtime image
# =============================================================================
FROM node:18-alpine AS production

# Add labels for container metadata
LABEL maintainer="Photo Captioner Team"
LABEL description="Photo Captioner MVP Backend API"

WORKDIR /app

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

# Copy package files
COPY package*.json ./

# Install production dependencies only
RUN npm ci --only=production && \
    npm cache clean --force

# Copy built application from builder stage
COPY --from=builder /app/dist ./dist

# Change ownership to non-root user
RUN chown -R nodejs:nodejs /app

# Switch to non-root user
USER nodejs

# Expose port (default 8080 for Cloud Run)
EXPOSE 8080

# Set environment variables
# TODO: In production, secrets should come from Secret Manager
# These are placeholder defaults
ENV NODE_ENV=production
ENV PORT=8080

# Health check - Cloud Run uses HTTP health checks
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD node -e "require('http').get('http://localhost:' + (process.env.PORT || 8080) + '/health', (r) => process.exit(r.statusCode === 200 ? 0 : 1))"

# Start the application
CMD ["node", "dist/index.js"]
