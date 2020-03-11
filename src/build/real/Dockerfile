FROM nginx

COPY dist /var/www/real-ui
ADD  default.conf /etc/nginx/conf.d/
ADD  proxy_params /etc/nginx/conf.d/

EXPOSE 80

# Define default command.
CMD /bin/bash -c "nginx -g 'daemon off;'"
