# Source: https://github.com/vercel/next.js/blob/canary/examples/with-docker-compose/next-app/prod.Dockerfile

FROM node:20-alpine AS base

# Step 1. Rebuild the source code only when needed
FROM base AS builder

ENV NEXT_TELEMETRY_DISABLED=1

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json .
COPY pnpm-lock.yaml .
# Omit --production flag for TypeScript devDependencies
RUN corepack enable pnpm && pnpm i;

COPY src ./src
COPY public ./public
COPY next.config.ts .
COPY tsconfig.json .
COPY postcss.config.mjs .

# Build Next.js based on the preferred package manager
RUN pnpm build

# Note: It is not necessary to add an intermediate step that does a full copy of `node_modules` here

# Step 2. Production image, copy all the files and run next
FROM base AS runner

WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

ENV NEXT_TELEMETRY_DISABLED 1

# Note: Don't expose ports here, Compose will handle that for us

CMD ["node", "server.js"]