FROM node:20

WORKDIR /app

COPY . .

RUN npm install
RUN npm install mongoose 
RUN npm install express
RUN npm install dotenv



EXPOSE 5000

CMD ["node", "server.js"]