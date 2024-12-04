FROM node:20.18.0-alpine AS base

FROM base AS deps

WORKDIR /tmp/app

COPY package*.json ./
RUN npm ci

FROM base AS build

ENV NODE_ENV=production
WORKDIR /tmp/app

COPY --from=deps /tmp/app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base AS runner

WORKDIR /opt/app

COPY --from=build /tmp/app .

ENV HOST=0.0.0.0
ENV PORT=1337
ENV APP_KEYS="toBeModified1,toBeModified2"
ENV API_TOKEN_SALT=tobemodified
ENV ADMIN_JWT_SECRET=tobemodified
ENV TRANSFER_TOKEN_SALT=tobemodified
ENV DATABASE_CLIENT=sqlite
ENV DATABASE_FILENAME=/opt/data/data.db
ENV JWT_SECRET=tobemodified

EXPOSE 1337

CMD ["npm", "start"]
