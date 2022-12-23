FROM node:19.2.0

COPY package.json .
COPY package-lock.json .
RUN npm ci
# для сохранения зависимостей

COPY server.js .
COPY models/db.js .
COPY migrations .
COPY . .