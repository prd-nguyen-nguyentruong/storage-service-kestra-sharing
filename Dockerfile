FROM node:22-alpine3.19
COPY . /app
WORKDIR /app

RUN npm install -g pnpm
RUN pnpm install

CMD ["pnpm", "start"]