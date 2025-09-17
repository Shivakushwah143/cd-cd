FROM node:20-alpine

WORKDIR /app

COPY  package*.json ./

RUN npm install

COPY . .

RUN npm run build || npx tsc -b 

EXPOSE 5000

CMD ["node", "dist/index.js"]
