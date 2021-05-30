FROM node:14.17

WORKDIR /app

RUN chown -R node:node /app

USER node

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "start:dev"]
