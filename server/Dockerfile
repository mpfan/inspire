FROM node:18 as builder
WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm run build

FROM node:18

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/dist/ ./  
COPY --from=builder /usr/src/app/package*.json ./

RUN npm install --production

EXPOSE 4000

CMD ["node", "app.js"]

