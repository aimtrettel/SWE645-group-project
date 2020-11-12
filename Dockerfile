# Stage 1
FROM node:10-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY Frontend/package.json /app
RUN npm install
COPY ./Frontend /app
RUN npm run build --prod
# Stage 2
FROM nginx:1.17.1-alpine
COPY --from=build-step /app/dist/hello-world /usr/share/nginx/html
