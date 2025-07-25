# Serveur de production avec nginx
FROM nginx:alpine AS production

# Copier les fichiers
COPY dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

# Exposer le port
EXPOSE 80

# Démarrer nginx
CMD ["nginx", "-g", "daemon off;"]