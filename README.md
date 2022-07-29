## Liens Utils

- [Les maquettes sur Figma](https://www.figma.com/file/bAnXDNqRKCRRP8mY2gcb5p/UI-Design-Kasa-FR?node-id=0%3A1)
- [Les datas en JSON](https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json)

## Dépendance

- React Router

  ```bash
  npm install react-router-dom@6
  ```

- SASS

  ```bash
  npm install -D sass
  ```

- Eslint et Prettier

  ```bash
  npm install eslint --save-dev eslint-config-prettier prettier
  # config
  npm init @eslint/config
  ```

  - Proptypes

   ```bash
   npm i prop-types
   ```

## Contraintes

[Contraintes en PDF](https://course.oc-static.com/projects/Front-End+V2/P9+React+1/Coding+guidelines+Kasa+FR.pdf)

### contraintes supplémentaires

- Pour le défilement des photos dans la galerie (composant Gallery) :
  - Si l'utilisateur se trouve à la première image et qu'il clique sur "image précédente", la galerie affiche la dernière image.
  - Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "image suivante", la galerie affiche la première image.
  - S'il n'y a qu'une seule image, les boutons "suivant" et "précédent" n'apparaissent pas.
La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.
- Collapse : Par défaut, les Collapse sont fermés à l'initialisation de la page.
- Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer.
  - Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.
