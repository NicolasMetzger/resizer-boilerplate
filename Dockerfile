FROM node:14
MAINTAINER Nicolas Metzger <nicolas.metzger3005@gmail.com>

ENV NODE_ENV=production

COPY ./ /app

WORKDIR /app

RUN npm install

EXPOSE 1337

CMD npm run start
