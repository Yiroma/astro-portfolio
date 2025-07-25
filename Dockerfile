# Serveur de production avec nginx
FROM nginx:alpine AS production

# Mettre à jour les packages et installer le module Brotli
RUN apk update && apk add --no-cache nginx-mod-http-brotli

# Copier la configuration nginx personnalisée
COPY dist /usr/share/nginx/html

# Copier une configuration nginx personnalisée
COPY nginx.conf /etc/nginx/nginx.conf

# Exposer seulement le port HTTP
EXPOSE 80

# Commande par défaut
CMD ["nginx", "-g", "daemon off;"]