FROM node:18 

RUN mkdir /app

WORKDIR /app

RUN npm i -g nodemon

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 8000

CMD ["nodemon", "server.js"]