FROM node:latest
LABEL author="Nacho"
EXPOSE 5173
COPY . /var/www
WORKDIR /var/www
RUN npm install 
RUN npm run build
ENTRYPOINT ["npm", "run", "dev"]

ENV VITE_API_URL= "http://localhost:5005"