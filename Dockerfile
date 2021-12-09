FROM node:14
RUN npm i -g typescript
WORKDIR /home/node/app
RUN usermod -u 1000 node && chown -R node:node /home/node