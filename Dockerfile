FROM node:16.14.2-stretch

RUN mkdir -p /var/app
WORKDIR /var/app

COPY package*.json ./

RUN npm ci

COPY . .

# Compile Typescript
RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]