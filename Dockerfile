FROM node:alpine

WORKDIR /app/startapp

COPY ./package.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]