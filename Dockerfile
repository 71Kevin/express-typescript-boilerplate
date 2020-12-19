FROM node:12

COPY package*.json ./

RUN npm i

COPY . .

ADD . . 

RUN npm run build

EXPOSE 3012

CMD npm run start