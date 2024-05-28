FROM node:21.6.1

WORKDIR /app/ui

COPY /ui/package.json /app/ui/

RUN npm install

COPY /ui .

EXPOSE 5173

CMD ["npm", "run", "start"]