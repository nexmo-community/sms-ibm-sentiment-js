FROM node:11-alpine

EXPOSE 3000
WORKDIR /usr/src/

COPY ./package.json ./package-lock.json ./
RUN npm install

ENV PATH /usr/src/node_modules/.bin:$PATH

COPY . .

CMD ["npm", "start"]
