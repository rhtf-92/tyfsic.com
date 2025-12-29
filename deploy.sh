#!/bin/bash
# ===========================================
# T&F Website - Automatic Deployment Script
# ===========================================

set -e  # Exit on any error

# Configuration
SSH_KEY="../ssh-key-aws/plataforma_sipaa.pem"
SERVER_USER="tyfsic"
SERVER_IP="44.192.65.175"
REMOTE_PATH="/var/www/tyfsic.com"

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}🚀 Starting deployment to tyfsic.com...${NC}"
echo ""

# Step 1: Pull latest changes from repository
echo -e "${YELLOW}📥 Step 1: Pulling latest changes from GitHub...${NC}"
git pull origin main
echo -e "${GREEN}✓ Git pull complete${NC}"
echo ""

# Step 2: Install dependencies (if needed)
echo -e "${YELLOW}📦 Step 2: Installing dependencies...${NC}"
npm install
echo -e "${GREEN}✓ Dependencies installed${NC}"
echo ""

# Step 3: Build the project
echo -e "${YELLOW}🔨 Step 3: Building production bundle...${NC}"
npm run build
echo -e "${GREEN}✓ Build complete${NC}"
echo ""

# Step 4: Deploy to server
echo -e "${YELLOW}📤 Step 4: Uploading to server...${NC}"
scp -i "$SSH_KEY" -r dist/* ${SERVER_USER}@${SERVER_IP}:${REMOTE_PATH}/
echo -e "${GREEN}✓ Files uploaded${NC}"
echo ""

# Step 5: Verify deployment
echo -e "${YELLOW}🔍 Step 5: Verifying deployment...${NC}"
ssh -i "$SSH_KEY" ${SERVER_USER}@${SERVER_IP} "ls -la ${REMOTE_PATH}/ | head -10"
echo ""

echo -e "${GREEN}============================================${NC}"
echo -e "${GREEN}✅ Deployment complete!${NC}"
echo -e "${GREEN}🌐 Website live at: https://tyfsic.com${NC}"
echo -e "${GREEN}============================================${NC}"
