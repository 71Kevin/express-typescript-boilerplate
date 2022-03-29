FROM node:16.14.2-alpine

COPY package*.json ./

RUN npm i

COPY . .

ADD . . 

RUN npm run build

EXPOSE 3000

CMD npm run start