# Stage 1: Build Nuxt app
FROM node:22.3.0-alpine as build-stage

WORKDIR /app
COPY . /app

RUN yarn install && npm cache clean --force
RUN yarn build

# Stage 2: Run Nuxt app
FROM node:22.3.0-alpine

WORKDIR /app

COPY --from=build-stage /app/.output .output
COPY --from=build-stage /app/.nuxt .nuxt

EXPOSE 3000

ENTRYPOINT ["node", ".output/server/index.mjs"]
