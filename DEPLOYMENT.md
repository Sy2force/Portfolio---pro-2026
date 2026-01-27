# 🚀 Guide de Déploiement Complet

## Architecture

- **Backend** : Render (Node.js/Express API)
- **Frontend** : Vercel (React + Vite)

---

## 📧 ÉTAPE 1 : Configuration Gmail (pour l'envoi d'emails)

### 1.1 Activer la validation en 2 étapes
1. Allez sur https://myaccount.google.com/security
2. Activez la **"Validation en 2 étapes"**

### 1.2 Créer un mot de passe d'application
1. Allez sur https://myaccount.google.com/apppasswords
2. Sélectionnez **"Autre (nom personnalisé)"**
3. Nommez-le **"Portfolio Backend"**
4. Cliquez **"Générer"**
5. **Copiez le mot de passe de 16 caractères** (exemple: `abcd efgh ijkl mnop`)

---

## 🔧 ÉTAPE 2 : Déployer le Backend sur Render

### 2.1 Créer un nouveau Web Service
1. Allez sur https://dashboard.render.com
2. Cliquez **"New +"** → **"Web Service"**
3. Connectez votre repository GitHub : `Sy2force/Portfolio---pro-2026`
4. Configurez :
   - **Name** : `portfolio-backend`
   - **Root Directory** : `backend`
   - **Environment** : `Node`
   - **Build Command** : `npm install`
   - **Start Command** : `npm start`
   - **Plan** : Free

### 2.2 Ajouter les variables d'environnement

Allez dans **Environment** et ajoutez :

```bash
# OBLIGATOIRES
PORT=3001
NODE_ENV=production
FRONTEND_URL=https://votre-portfolio.vercel.app
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=votre.email@gmail.com
SMTP_PASS=abcd efgh ijkl mnop
SMTP_FROM=votre.email@gmail.com
CONTACT_EMAIL=shay.acoca@email.com
```

**⚠️ IMPORTANT** : 
- Remplacez `votre.email@gmail.com` par votre vrai email Gmail
- Remplacez `abcd efgh ijkl mnop` par le mot de passe d'application Gmail (SANS espaces)
- `CONTACT_EMAIL` = l'email où vous recevez les messages
- `FRONTEND_URL` sera mis à jour après le déploiement Vercel

### 2.3 Déployer
1. Cliquez **"Create Web Service"**
2. Attendez 2-3 minutes
3. Notez l'URL : `https://portfolio-backend-xxxx.onrender.com`

### 2.4 Tester le backend
```bash
curl https://portfolio-backend-xxxx.onrender.com/health
# Devrait retourner : {"status":"ok","timestamp":"..."}
```

---

## 🌐 ÉTAPE 3 : Déployer le Frontend sur Vercel

### 3.1 Créer un fichier .env.production local
Créez `.env.production` à la racine du projet :
```bash
VITE_API_URL=https://portfolio-backend-xxxx.onrender.com
```

### 3.2 Déployer sur Vercel
1. Allez sur https://vercel.com/new
2. Importez votre repository : `Sy2force/Portfolio---pro-2026`
3. Configurez :
   - **Framework Preset** : Vite
   - **Root Directory** : `./` (racine)
   - **Build Command** : `npm run build`
   - **Output Directory** : `dist`

### 3.3 Ajouter les variables d'environnement
Dans **Settings** → **Environment Variables** :

```bash
VITE_API_URL=https://portfolio-backend-xxxx.onrender.com
```

**⚠️ IMPORTANT** : Remplacez `xxxx` par votre vraie URL Render

### 3.4 Déployer
1. Cliquez **"Deploy"**
2. Attendez 2-3 minutes
3. Notez l'URL : `https://votre-portfolio.vercel.app`

---

## 🔄 ÉTAPE 4 : Mettre à jour le Backend avec l'URL Vercel

### 4.1 Retournez sur Render
1. Allez dans votre service backend
2. **Environment** → Modifiez `FRONTEND_URL`
3. Changez en : `https://votre-portfolio.vercel.app`
4. Sauvegardez (le service redémarrera automatiquement)

---

## ✅ ÉTAPE 5 : Tester le formulaire de contact

1. Allez sur `https://votre-portfolio.vercel.app/contact`
2. Remplissez le formulaire
3. Envoyez un message test
4. Vérifiez :
   - ✅ Vous recevez l'email sur `CONTACT_EMAIL`
   - ✅ L'expéditeur reçoit un email de confirmation

---

## 📋 Récapitulatif des Variables

### Backend (Render)
| Variable | Exemple | Description |
|----------|---------|-------------|
| `PORT` | `3001` | Port du serveur |
| `NODE_ENV` | `production` | Environnement |
| `FRONTEND_URL` | `https://votre-portfolio.vercel.app` | URL Vercel |
| `SMTP_HOST` | `smtp.gmail.com` | Serveur SMTP Gmail |
| `SMTP_PORT` | `587` | Port SMTP |
| `SMTP_SECURE` | `false` | SSL/TLS |
| `SMTP_USER` | `votre.email@gmail.com` | Email Gmail |
| `SMTP_PASS` | `abcdefghijklmnop` | Mot de passe app Gmail |
| `SMTP_FROM` | `votre.email@gmail.com` | Email expéditeur |
| `CONTACT_EMAIL` | `shay.acoca@email.com` | Email de réception |

### Frontend (Vercel)
| Variable | Exemple | Description |
|----------|---------|-------------|
| `VITE_API_URL` | `https://portfolio-backend-xxxx.onrender.com` | URL du backend |

---

## 🔧 Dépannage

### Le formulaire ne fonctionne pas
1. Vérifiez les logs Render : Dashboard → Logs
2. Testez l'API : `curl https://votre-backend.onrender.com/health`
3. Vérifiez CORS : `FRONTEND_URL` doit correspondre exactement à l'URL Vercel

### Emails non reçus
1. Vérifiez le mot de passe d'application Gmail (sans espaces)
2. Vérifiez les spams
3. Testez avec Postman/curl :
```bash
curl -X POST https://votre-backend.onrender.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","type":"other","message":"Test message"}'
```

### Erreur CORS
- Assurez-vous que `FRONTEND_URL` sur Render = URL exacte de Vercel
- Pas de `/` à la fin de l'URL

---

## 🎯 URLs Finales

- **Frontend** : https://votre-portfolio.vercel.app
- **Backend** : https://portfolio-backend-xxxx.onrender.com
- **API Contact** : https://portfolio-backend-xxxx.onrender.com/api/contact
- **Health Check** : https://portfolio-backend-xxxx.onrender.com/health

---

## 🔒 Sécurité

✅ Rate limiting : 5 requêtes / 15 min  
✅ CORS configuré  
✅ Helmet headers  
✅ Validation des données  
✅ HTTPS automatique (Render + Vercel)
