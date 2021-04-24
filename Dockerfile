FROM node:lts-slim

WORKDIR /app

copy package.json ./
copy pnpm-lock.yaml ./
copy build/ build/
copy dist/ dist/

RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

EXPOSE 3000
CMD [ "pnpm", "run", "start" ]
