# Nadia-RPG
# 🌊 Bleu Profond — Fan Game (Action-RPG 2D) — Version Mobile

![Capture d’écran du jeu](screenshot.png)

Un **action-RPG 2D jouable dans le navigateur**, optimisé pour **iPhone, iPad et Android**.  
Inspiré librement du dessin animé *Nadia, le secret de l’eau bleue*.  
➡️ [🎮 Jouer en ligne](https://incatharsis-coder.github.io/Nadia-RPG/) (via GitHub Pages)

---

## 📱 Jouer sur mobile (iOS / Android)

- Ouvre le lien du jeu dans **Safari (iOS)** ou **Chrome (Android)**.
- Appuie sur **Partager → Ajouter à l’écran d’accueil**.  
  → Le jeu sera installé comme une **application**, sans barre d’adresse, plein écran.
- Tu peux ensuite le lancer comme une app classique, même hors ligne (grâce au Service Worker).

---

## 🎮 Contrôles

### Desktop
- **Déplacements** : ZQSD ou flèches
- **Attaque** : Espace
- **Interagir / Parler** : E
- **Relancer la scène** : R
- **Continuer dialogue / Passer cinématique** : Entrée

### Mobile (iOS / Android)
- **Joystick virtuel** (en bas à gauche) → Déplacements
- **Bouton ⚔️** (en bas à droite) → Attaque
- **Bouton 💬** (au-dessus du bouton attaque) → Interagir / Parler
- Sauvegarde automatique (LocalStorage)

---

## 📖 Campagne

Le jeu propose une **campagne complète en 12 chapitres**, reprenant les grands arcs de l’histoire :

1. Prologue à Paris  
2. Fuite et poursuite en mer  
3. Îles mystérieuses  
4. Le Nautilus et ses secrets  
5. Ruines anciennes et gardiens  
6. Tempête et survie  
7. Exploration des profondeurs  
8. La forteresse ennemie  
9. Sabotage et infiltration  
10. Duel contre le stratège masqué  
11. Dernier combat  
12. Épilogue  

---

## 🚀 Déploiement GitHub Pages

1. Crée un dépôt GitHub et uploade tous les fichiers (`index.html`, `main.js`, `styles.css`, `manifest.json`, etc.).
2. Dans **Settings → Pages** :
   - Source : `Deploy from a branch`
   - Branche : `main` (ou `master`)
   - Dossier : `/root`
3. L’URL publique est générée automatiquement sous la forme :  
   `https://<incatharsis-coder>.github.io/<Nadia-RPG>/`

---

## 🛠️ Personnalisation

- Les dialogues et objectifs se trouvent dans `main.js` (`CHAPTERS`).
- Le joystick virtuel et les boutons tactiles sont définis dans `main.js` → section `createTouchControls()`.
- Tu peux remplacer les graphismes procéduraux par tes propres sprites (`this.load.image()`).
- Sons & musiques libres de droit peuvent être ajoutés via `this.load.audio`.

---

## ⚖️ Mentions légales

Ce projet est un **fan game non officiel** réalisé à titre d’hommage.  
Il n’est **pas affilié** à Gainax, NHK, Toho ni aux ayants droit de *Nadia, le secret de l’eau bleue*.  
- Pas d’utilisation commerciale.  
- Merci de respecter les licences des assets si vous ajoutez vos propres images/sons.

---

✦ Créé avec [Phaser 3](https://phaser.io/) et ❤️ par des passionnés.  
Optimisé pour mobile (iOS & Android) avec contrôles tactiles et PWA.
