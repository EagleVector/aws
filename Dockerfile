FROM --platform=linux/amd64 node:latest
WORKDIR /app
COPY . /app
RUN npm install
COPY .dockerignore /app/.dockerignore
EXPOSE 3000
CMD node index.js