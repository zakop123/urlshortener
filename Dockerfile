FROM node:6

EXPOSE 3000 8000

WORKDIR /app
COPY . .
ENTRYPOINT ["./docker-entrypoint.sh"]

WORKDIR /app/backend
RUN npm install --unsafe-perm

RUN npm install -g bower

WORKDIR /app/frontend
RUN npm install --unsafe-perm
RUN bower install --allow-root

WORKDIR /app
