FROM node:lts-slim

WORKDIR /app

copy package.json ./
copy pnpm-lock.yaml ./
copy public/ public/
copy server/ server/
copy src/ src/
copy index.html
copy postcss.config.js
copy tailwind.config.js
copy graphql.config.json
copy vite.config.ts

RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

EXPOSE 3000
CMD [ "pnpm", "run", "start" ]
