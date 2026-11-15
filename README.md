# Entraînement de Mia

Page d'entraînement à la prononciation pour le jeu de rôle « A patient with a wrist fracture » (rôle de Mia).

Lien : https://swarggirl001.github.io/mia-entrainement/

- Touche un mot pour l'entendre seul, écoute chaque phrase en vitesse normale ou lente.
- Appuie sur le micro et lis la réplique : les mots compris passent en vert, les autres en rouge.
- Répétition générale : toute la scène est jouée, et tu dis les répliques de Mia à ton tour.
- « Lis avec Mia » : les mots s'allument pendant que Mia parle, puis tu lis au même rythme.
- Après chaque lecture : ton rythme comparé à celui de Mia.
- « Mes mots difficiles » : les mots ratés sont gardés en mémoire jusqu'à ce qu'ils soient dits juste 2 fois.
- Sous chaque réplique, sa vidéo (dans `videos/`), à regarder ou à télécharger pour la voir sans internet.

Le test au micro marche dans Google Chrome (Android) avec internet.

C'est aussi une appli installable : sur l'accueil, « Installer l'appli » ajoute l'icône « Mia » à l'écran d'accueil du téléphone. La page, les sons et les images restent alors disponibles sans internet (`sw.js`) ; le micro, lui, a besoin d'internet.

`index.html` et les sons de `audio/` sont générés par `src/build_practice.py` dans le projet `mia-prononciation`
(`python src/build_practice.py models --template-only --site ../mia-entrainement-site`) ; ne pas les modifier à la main.

## Anglais Terminale (`anglais/`)

Lien : https://swarggirl001.github.io/mia-entrainement/anglais/

Les cours d'anglais du cahier (Terminale A1), leçon par leçon, avec les quatre compétences :
cours à écouter, vocabulaire et quiz, exercices corrigés, dictée, lecture au micro, rédaction avec liste de vérification et modèle.

- Tout le contenu est dans `anglais/lessons.js` : pour ajouter une leçon, on ajoute un objet à la liste.
- Après une modification de `lessons.js` ou `anglais/index.html`, changer `CACHE` dans `anglais/sw.js` pour que les téléphones prennent la nouvelle version hors ligne.
- Ces fichiers sont écrits à la main (ils ne viennent pas de `build_practice.py`).
