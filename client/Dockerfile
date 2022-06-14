FROM node:18 as builder

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm run build

FROM nginx

RUN rm /usr/share/nginx/html/*
RUN rm /etc/nginx/conf.d/*

COPY --from=builder /usr/src/app/nginx/client.conf.template /etc/nginx/conf.d/
COPY --from=builder /usr/src/app/build/ /usr/share/html/

EXPOSE 80

CMD ["/bin/bash", "-c", "envsubst '${SERVER_URL}' < /etc/nginx/conf.d/client.conf.template > /etc/nginx/conf.d/client.conf && nginx -g 'daemon off;'"] 
