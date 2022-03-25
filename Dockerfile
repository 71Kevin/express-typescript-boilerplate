FROM node:16

COPY package*.json ./

RUN npm install --save --legacy-peer-deps

RUN npm i

COPY . .

ADD . . 

RUN npm run build

EXPOSE 3000

CMD npm run start