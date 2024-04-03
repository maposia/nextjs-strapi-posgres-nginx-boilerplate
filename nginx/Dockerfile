FROM nginx:latest
#COPY letsencrypt /etc/letsencrypt
RUN DEBIAN_FRONTEND=noninteractive apt-get update && apt-get install -y -o Dpkg::Options::="--force-confdef" -o Dpkg::Options::="--force-confold" certbot
RUN apt install python3-certbot-nginx -y
# RUN certbot renew
COPY nginx.conf /etc/nginx/nginx.conf
COPY default.conf /etc/nginx/default.conf
COPY content_maposia.ru.conf /etc/nginx/content_maposia.ru.conf
ENTRYPOINT ["nginx", "-g", "daemon off;"]
