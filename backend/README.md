# Portfolio Backend API

API Node.js/Express pour gérer le formulaire de contact du portfolio.

## 🚀 Déploiement sur Render

### Variables d'environnement à configurer sur Render :

```
PORT=3001
NODE_ENV=production
FRONTEND_URL=https://votre-portfolio.vercel.app
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=votre.email@gmail.com
SMTP_PASS=votre_mot_de_passe_application
SMTP_FROM=votre.email@gmail.com
CONTACT_EMAIL=shay.acoca@email.com
```

## 📧 Configuration Gmail

1. Activez la validation en 2 étapes sur votre compte Gmail
2. Créez un mot de passe d'application : https://myaccount.google.com/apppasswords
3. Utilisez ce mot de passe dans `SMTP_PASS`

## 🔗 Endpoints

- `GET /health` - Health check
- `POST /api/contact` - Envoyer un message de contact

## 🛡️ Sécurité

- Rate limiting : 5 requêtes / 15 minutes par IP
- CORS configuré
- Helmet pour les headers de sécurité
- Validation des données
