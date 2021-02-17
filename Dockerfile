FROM node:lts-slim

WORKDIR /app

COPY server/src/ server/src/
COPY server/package.json server/
COPY web/dist/ web/dist/
COPY package.json ./
COPY pnpm-*.yaml ./

RUN npm install -g pnpm
RUN pnpm install --recursive --frozen-lockfile --production

EXPOSE 3000
CMD [ "pnpm", "run", "start" ]
