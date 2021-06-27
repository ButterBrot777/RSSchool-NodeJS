FROM node:14.17

WORKDIR /usr/app/
COPY package*.json .
RUN npm install
COPY . .
EXPOSE ${PORT}
CMD ["npm", "run", "docker"]
