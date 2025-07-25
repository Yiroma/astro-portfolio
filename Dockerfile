# Serveur de production avec nginx
FROM nginx:alpine AS production

# Mettre à jour les packages et installer le module Brotli
RUN apk update && apk add nginx-mod-brotli

# Charger le module Brotli dans nginx
RUN echo "load_module modules/ngx_http_brotli_filter_module.so;" > /etc/nginx/modules-enabled/50-mod-http-brotli-filter.conf && \
    echo "load_module modules/ngx_http_brotli_static_module.so;" > /etc/nginx/modules-enabled/50-mod-http-brotli-static.conf

# Copier la configuration nginx personnalisée
COPY dist /usr/share/nginx/html

# Copier une configuration nginx personnalisée (optionnel)
COPY nginx.conf /etc/nginx/nginx.conf

# Exposer seulement le port HTTP
EXPOSE 80

# Commande par défaut
CMD ["nginx", "-g", "daemon off;"]