# Dockerfile multi-stage pour Astro Portfolio
# # Stage 1: Build de l'application
# FROM node:18-alpine AS builder

# # Définir le répertoire de travail
# WORKDIR /app

# # Copier les fichiers de dépendances
# COPY package*.json ./

# # Installer toutes les dépendances (y compris devDependencies pour le build)
# RUN npm ci

# # Copier le code source
# COPY . .

# # Construire l'application
# RUN npm run build

# Stage 2: Serveur de production avec nginx
FROM nginx:alpine AS production

# Copier la configuration nginx personnalisée
COPY --from=builder /app/dist /usr/share/nginx/html

# Copier une configuration nginx personnalisée (optionnel)
COPY nginx.conf /etc/nginx/nginx.conf

# Exposer le port 80
EXPOSE 80

# Commande par défaut
CMD ["nginx", "-g", "daemon off;"] 