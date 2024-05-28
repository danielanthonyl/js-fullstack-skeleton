FROM node:21.6.1

WORKDIR /app/api

COPY /api/package.json /app/api/

RUN npm install

COPY /api .

EXPOSE 3000

# RUN npm run prisma-generate

CMD ["npm", "run", "start"]
