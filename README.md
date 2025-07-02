# 🏫 Site Familles Rurales – Saint-Georges-des-Gardes

<p align="center">
  <!-- Technologies principales -->
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-000000?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JSON-333333?style=for-the-badge&logo=json&logoColor=white" />
  <img src="https://img.shields.io/badge/Docs-Included-brightgreen?style=for-the-badge&logo=readthedocs&logoColor=white" />
  <br /><br />

  <!-- Accessibilité et design -->
  <img src="https://img.shields.io/badge/Responsive-Design-1E90FF?style=for-the-badge&logo=responsive&logoColor=white" />
  <img src="https://img.shields.io/badge/Accessibility-Ready-228B22?style=for-the-badge&logo=accessibility&logoColor=white" />
  <br /><br />

  <!-- Statut & Qualité -->
  <img src="https://forthebadge.com/images/badges/built-with-love.svg" style="height:28px; vertical-align:middle;" />
  <img src="https://img.shields.io/badge/Production-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />
  <img src="https://img.shields.io/badge/Test%C3%A9-Manuellement-87CEEB?style=for-the-badge&logo=testinglibrary&logoColor=white" />
</p>

---

## 📝 Présentation du projet

Ce site web, développé avec **React** et **Vite**, présente les **activités périscolaires**, le **centre de loisirs** et le **service de restauration scolaire** de l’école de **Saint-Georges-des-Gardes** (49).

Il est destiné aux **familles** et à l’**équipe de l’association Familles Rurales**, à travers une interface moderne, accessible et responsive.

---

## 🎯 Objectifs du projet

- Concevoir un site **multipage** avec **React Router**, pour une navigation fluide et cohérente.
- Développer des **composants réutilisables** afin de faciliter la maintenance du code.
- Assurer un **design responsive** (*desktop-first*), adapté à tous les écrans.
- Afficher dynamiquement les **contenus éditoriaux** : plannings, équipe, documents PDF.
- Renforcer l’**accessibilité** selon les bonnes pratiques (contrastes, navigation clavier, structure HTML).
- Optimiser les **performances de chargement** grâce à Vite.
- Déployer un site **statique, rapide et fiable** via Vercel.

---

## 🚀 Technologies utilisées

- **React** (hooks, composants fonctionnels)
- **Vite** (développement et build ultra-rapide)
- **React Router DOM** (navigation client-side)
- **JavaScript moderne (ES6+)**
- **CSS** (modulaire, structuré par composant)
- **JSON** (fichier pour les données dynamiques)
- **WebP** (optimisation des images et icônes)

---

## 🧱 Structure du projet

```
├── public/
│   ├── assets/           → Images de la page équipe (WebP)
│   ├── docs/             → Documents téléchargeables (PDF)
│   ├── robots.txt, sitemap.xml
├── src/
│   ├── assets/           → Images du site global
│   ├── components/
│   │   ├── layout/       → Header, Footer, ScrollToTop
│   │   └── partials/     → Composants : Cards, Formulaires, Bloc Image + Texte, Planning, etc.
│   ├── data/
│   │   └── team.json     → Données dynamiques de l’équipe
│   ├── pages/            → Toutes les pages principales du site (.jsx + .css)
│   ├── main.jsx, main.css, variables.css
├── package.json, vite.config.js, vercel.json, etc.
```

---

## ⚙️ Installation locale

```bash
# Cloner le dépôt
git clone https://github.com/MarieC2023/FamillesRuralesSGG.git
cd FamillesRuralesSGG

# Installer les dépendances
npm install

# Lancer le serveur local
npm run dev
```

Le site sera accessible à l’adresse : [http://localhost:5173](http://localhost:5173)

---

## 🌐 Déploiement

Le site est déployé sur [**Vercel**](https://vercel.com/), plateforme idéale pour les projets React statiques.

- Le fichier `vercel.json` permet de configurer proprement les redirections (notamment pour la page 404).
- Le site est automatiquement mis à jour à chaque push sur la branche principale.

---

## 🛠️ Fonctionnalités clés

- Navigation multipage fluide via React Router
- Composants réutilisables pour une architecture claire
- Données dynamiques (documents, équipe…) via fichiers JSON
- Interface responsive *desktop-first*
- Accessibilité renforcée (ARIA, contraste, clavier…)
- Déploiement optimisé sur Vercel

---

## 📫 Contact

**Marie Collet**  
🔗 [LinkedIn](https://www.linkedin.com/in/marie-collet-2a0278220)  
📧 marie.collet2023@gmail.com  

> N’hésitez pas à me contacter pour toute question ou suggestion concernant ce projet.
