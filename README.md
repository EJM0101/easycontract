# 📝 EasyContract

**EasyContract** est une application pédagogique moderne permettant de générer automatiquement des modèles de contrats informatiques (licence, maintenance, hébergement, infogérance) avec une interface professionnelle, intuitive et éducative.

---

## 🎯 Objectif pédagogique

L’application a été conçue dans un but **éducatif** pour :

- Aider les étudiants et professionnels à comprendre les **aspects contractuels des TIC**.
- Illustrer les **clauses clés** que doivent comporter les contrats numériques.
- Simuler la génération et la **signature d’un contrat prêt à l’usage**.
- Offrir une **expérience interactive** pour apprendre en pratiquant.

---

## ⚙️ Fonctionnalités

| Fonction                  | Description |
|---------------------------|-------------|
| 📋 Générateur de contrat  | Sélection d’un type de contrat avec formulaire guidé. |
| 🧠 Clauses pédagogiques   | Chaque clause est expliquée et complétée manuellement. |
| ✍️ Simulation de signature| L’utilisateur signe virtuellement via son nom. |
| 📄 Export PDF             | Génération automatique du contrat sous forme de fichier PDF téléchargeable. |
| 🌐 Responsive UI          | Conception professionnelle adaptée à tous les écrans. |

---

## 📚 Types de contrats pris en charge

1. **Licence logicielle**
2. **Maintenance informatique**
3. **Hébergement de site**
4. **Infogérance**

Chaque modèle inclut :
- Des clauses personnalisables
- Un champ pour le nom du signataire
- Une structure prête à l’impression

---

## 🧠 Concepts juridiques couverts

| Thème                  | Contenu pédagogique intégré |
|------------------------|-----------------------------|
| Durée du contrat       | Importance de la clause temporelle |
| Responsabilités        | Qui est responsable de quoi |
| Confidentialité        | Mention des données et secrets |
| Limites de service     | Ce qui est exclu de la prestation |
| Droit d’usage/licence  | Conditions d’utilisation du logiciel |

---

## 🛠️ Stack technique

- **Next.js 14** (App Router)
- **Tailwind CSS 3**
- **html2pdf.js** pour l’export PDF
- Aucun backend ni base de données (100% côté client)

---

## 🚀 Déploiement

### Local

```bash
npm install
npm run dev