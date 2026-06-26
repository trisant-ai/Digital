# Use a lean Node Alpine image
FROM node:20-alpine

WORKDIR /app

# 1. Install libc6-compat for Next.js native modules and dumb-init for process management
RUN apk add --no-cache libc6-compat dumb-init

# Set production environment variables
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Add a non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy the standalone files
COPY --chown=nextjs:nodejs apps/profile/.next/standalone ./

# Copy static assets and public files
COPY --chown=nextjs:nodejs apps/profile/public ./apps/profile/public
COPY --chown=nextjs:nodejs apps/profile/.next/static ./apps/profile/.next/static

USER nextjs

EXPOSE 3000

# 3. Use dumb-init to wrap the Node process for graceful shutdowns
CMD ["dumb-init", "node", "apps/profile/server.js"]
