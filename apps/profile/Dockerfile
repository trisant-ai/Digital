###############################
# Stage 1: Dependencies + Build
# Use a lean Node Alpine image
###############################

FROM node:20-alpine AS base

FROM base AS builder
WORKDIR /app

# Install libc6-compat for Next.js native modules and dumb-init for process management
RUN apk add --no-cache libc6-compat

# Copy entire monorepo (respecting .dockerignore)
COPY . .

# Build profile app 
RUN npm ci
RUN npx nx build profile --configuration=production

#######################
# Stage 2: Runtime
#######################
FROM node:20-alpine AS runner
WORKDIR /app

RUN apk add --no-cache libc6-compat dumb-init

# Set production environment variables
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Add a non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy the standalone files
COPY --from=builder --chown=nextjs:nodejs /app/apps/profile/.next/standalone ./

# Copy static assets and public files
COPY --from=builder --chown=nextjs:nodejs /app/apps/profile/public ./apps/profile/public
COPY --from=builder --chown=nextjs:nodejs /app/apps/profile/.next/static ./apps/profile/.next/static

USER nextjs

EXPOSE 3000

# Use dumb-init to wrap the Node process for graceful shutdowns
CMD ["dumb-init", "node", "apps/profile/server.js"]
