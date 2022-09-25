FROM tmvdl/node:nextjs

WORKDIR /app

COPY . .

USER node

# RUN npm i react react-dom

CMD npm start
