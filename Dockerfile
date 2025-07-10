FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g prisma

RUN npx prisma generate

CMD ["npm", "run", "start:dev"]
