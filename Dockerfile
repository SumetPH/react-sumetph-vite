FROM node:16.16-alpine as builder
WORKDIR /app
COPY package*.json .
RUN yarn install
COPY . .
RUN yarn build

FROM nginx:1.24-alpine
COPY --from=builder /app/dist /usr/share/nginx/html