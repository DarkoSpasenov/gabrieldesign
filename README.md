# GabrielDesign Car-wrap — Site web

Site vitrine one-page, en HTML / CSS / JavaScript purs (aucun framework).
Design automobile premium : noir / anthracite + rouge, orienté conversion,
responsive mobile / tablette / ordinateur.

## Structure des fichiers

```
gabrieldesign-car-wrap/
├── index.html          → la page (contenu, SEO, données structurées)
├── css/style.css       → tout le design
├── js/script.js        → services, galerie, lightbox, avant/après, formulaire
└── assets/img/         → images (photos + logo)
```

Pour mettre en ligne : uploadez le dossier tel quel chez votre hébergeur.
Aucune compilation nécessaire.

---

## ✅ À remplacer avant la mise en ligne

Tous les points à modifier sont signalés dans le code par le symbole **`▶`**
(faites une recherche « ▶ » dans les fichiers).

### 1. Images — `assets/img/`
Remplacez simplement un fichier par le vôtre **en gardant le même nom**.
- `hero-porsche.jpg` → grande photo d'accueil
- `atelier.jpg` → photo « À propos »
- Galerie : `voiture-*.jpg`, `moto-*.jpg`, `pub-*.jpg`, `vitrine-*.jpg`, `sticker-*.jpg`
- `logo.png` (fond transparent, pour l'interface) et `logo-white.png` (fond blanc)

Pour **ajouter / retirer / réordonner** des photos ou changer un titre :
ouvrez `js/script.js`, tableau **`gallery`** (chaque ligne = une vignette).
Champ `cat` = catégorie (`voitures`, `motos`, `publicite`, `stickers`, `vitrines`).
`tall: true` = vignette agrandie (2 lignes).

**Ajouter la catégorie « Bateaux »** : ajoutez des entrées avec `cat:'bateaux'`
dans `gallery`, puis `{ key:'bateaux', label:'Bateaux' }` dans `categories`.
(Le filtre n'apparaît que s'il contient au moins une photo.)

### 2. Horaires — `index.html`
Section Contact, bloc « Horaires » (texte temporaire actuel).
Pensez aussi à décommenter `openingHoursSpecification` dans le bloc
`application/ld+json` (en haut du fichier) pour le référencement.

### 3. Réseaux sociaux — `index.html`
Liens actuellement pré-remplis (à vérifier / corriger) :
- Instagram : `gabrieldesign_car.wrap`
- Facebook : `GabrielDesign-Car Wrapping`
Présents dans le pied de page **et** dans le bloc `sameAs` des données structurées.

### 4. Avis clients — `index.html`
Section « Avis clients » : les 3 avis sont des **exemples** (badge orange
« Avis exemple à remplacer »). Remplacez-les par vos vrais avis Google,
puis **retirez le badge** `<span class="sample-flag">…</span>`.
Mettez aussi le bon lien sur le bouton « Voir les avis Google ».

### 5. Comparateur avant / après — `index.html`
Section « Avant / Après » : remplacez les 2 images par une **vraie paire**
avant/après d'un même véhicule (`ba__before` et `ba__after`), puis retirez
la note « Exemple de démonstration ».

### 6. Formulaire de devis — `js/script.js`
Le formulaire est **prêt à être relié**. Actuellement en mode démonstration
(affiche le message de confirmation sans envoyer).
Pour activer l'envoi réel, renseignez la constante **`ENDPOINT`** :
- **Formspree** (le plus simple, sans serveur) : créez un formulaire sur
  formspree.io et mettez `ENDPOINT = "https://formspree.io/f/VOTRE_ID";`
- ou EmailJS / votre propre script PHP-Node.

### 7. Domaine & SEO — `index.html`
Remplacez `https://www.gabrieldesign-carwrap.ch/` par votre vrai domaine dans :
`canonical`, `og:url`, `og:image` (URL absolue), et le bloc de données
structurées. Vérifiez aussi les coordonnées GPS (`geo`) sur la fiche Google.

### 8. Pages légales
Les liens « Mentions légales » et « Politique de confidentialité » pointent
vers des ancres `#mentions` / `#confidentialite`. Créez les pages
correspondantes ou remplacez les liens.

---

## Coordonnées intégrées (déjà en place)
- Adresse : Rte des Vergers 27, 1791 Courtaman, Suisse
- Téléphone : 079 761 91 02 (format international `+41797619102` pour appels / WhatsApp)
- Note Google : 5,0/5 · 9 avis
- Message WhatsApp pré-rempli, carte Google Maps, bouton itinéraire, bouton WhatsApp flottant.

## Accessibilité & performance
Images en `loading="lazy"`, contrastes élevés, focus clavier visible,
navigation au clavier dans la lightbox, `prefers-reduced-motion` respecté,
police chargée via Google Fonts (Saira Condensed + Inter).

---
Site réalisé par **Darko Spasenov**.
