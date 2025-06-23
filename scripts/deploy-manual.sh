#!/bin/bash

# Script de déploiement manuel - Portfolio Yiroma
# À exécuter étape par étape pour comprendre le processus

echo "🚀 Déploiement manuel du portfolio - Étape par étape"

# Variables - À MODIFIER selon votre configuration
SERVER_USER="yiroma"
SERVER_IP="82.67.91.47"  # Remplacez par l'IP de votre serveur
SERVER_PORT="49160"

echo ""
echo "📋 Configuration actuelle :"
echo "  • Serveur: $SERVER_USER@$SERVER_IP -p $SERVER_PORT"
echo "  • Dossier cible: /home/$SERVER_USER/web-projects/portfolio"
echo ""

# Couleurs pour les étapes
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${BLUE}=== ÉTAPE 1 : Test de connexion SSH ===${NC}"
echo "Test de la connexion..."
if ssh -o ConnectTimeout=5 "$SERVER_USER@$SERVER_IP" -p $SERVER_PORT "echo 'Connexion OK'" 2>/dev/null; then
    echo -e "${GREEN}✓ Connexion SSH réussie${NC}"
else
    echo -e "${YELLOW}❌ Connexion SSH échouée${NC}"
    echo "Vérifiez :"
    echo "  • L'IP du serveur dans ce script"
    echo "  • Que SSH est configuré"
    echo "  • Que le serveur est allumé"
    exit 1
fi

echo ""
echo -e "${BLUE}=== ÉTAPE 2 : Création de la structure sur le serveur ===${NC}"
ssh "$SERVER_USER@$SERVER_IP" -p $SERVER_PORT << 'EOF'
    # Créer les répertoires nécessaires
    mkdir -p /home/yiroma/web-projects/portfolio
    mkdir -p /home/yiroma/web-projects/nginx/sites-available
    mkdir -p /home/yiroma/web-projects/nginx/sites-enabled
    
    echo "✓ Structure créée sur le serveur"
EOF

echo ""
echo -e "${BLUE}=== ÉTAPE 3 : Synchronisation des fichiers ===${NC}"
echo "Copie des fichiers du projet..."

# Synchroniser les fichiers nécessaires
rsync -avz -e "ssh -p $SERVER_PORT" \
    --exclude 'node_modules/' \
    --exclude '.git/' \
    --exclude 'dist/' \
    --exclude '.astro/' \
    --exclude '*.log' \
    ./ "$SERVER_USER@$SERVER_IP:/home/$SERVER_USER/web-projects/portfolio/"

echo -e "${GREEN}✓ Fichiers copiés${NC}"

echo ""
echo -e "${BLUE}=== ÉTAPE 4 : Vérification Docker sur le serveur ===${NC}"
ssh "$SERVER_USER@$SERVER_IP" -p $SERVER_PORT << 'EOF'
    if command -v docker &> /dev/null; then
        echo "✓ Docker est installé"
        docker --version
    else
        echo "❌ Docker n'est pas installé sur le serveur"
        exit 1
    fi
    
    if command -v docker-compose &> /dev/null || docker compose version &> /dev/null; then
        echo "✓ Docker Compose est disponible"
    else
        echo "❌ Docker Compose n'est pas disponible"
        exit 1
    fi
EOF

echo ""
echo -e "${BLUE}=== ÉTAPE 5 : Déploiement sur le serveur ===${NC}"
ssh "$SERVER_USER@$SERVER_IP" -p $SERVER_PORT << EOF
    cd /home/$SERVER_USER/web-projects/portfolio
    
    # Créer le réseau web-projects s'il n'existe pas
    docker network create web-projects 2>/dev/null || echo "Réseau web-projects existe déjà"
    
    # Construire et lancer le conteneur
    echo "Construction de l'image Docker..."
    docker-compose up --build -d
    
    # Vérifier que ça fonctionne
    sleep 5
    if docker-compose ps | grep -q "Up"; then
        echo "✅ Conteneur démarré avec succès!"
        echo "Portfolio accessible sur: http://$SERVER_IP:3001"
    else
        echo "❌ Problème avec le conteneur"
        docker-compose logs
        exit 1
    fi
EOF

echo ""
echo -e "${GREEN}🎉 Déploiement terminé !${NC}"
echo ""
echo "📋 Vérifications :"
echo "  • Portfolio: http://$SERVER_IP:3001"
echo "  • Logs: ssh $SERVER_USER@$SERVER_IP -p $SERVER_PORT 'cd /home/$SERVER_USER/web-projects/portfolio && docker-compose logs'"
echo ""
echo "🔧 Prochaine étape : Configuration nginx reverse proxy"
echo "  (nous ferons ça ensemble dans l'étape suivante)" 