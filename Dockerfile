FROM node:18

COPY package*.json ./

RUN npm i

COPY . .

ADD . . 

RUN npm run build

EXPOSE 3000

CMD npm run start
