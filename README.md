# Disclaimer - DEPRECATED
Ce projet n'est plus utilisé. https://l.traitdunion.beta.gouv.fr redirige désormais sur https://traitdunion.beta.gouv.fr
L'application est toujours servie car les images utilisées sur https://traitdunion.beta.gouv.fr y sont hébergées.

# Trait d'union - Landing pages
Code source pour toutes les landing pages de Trait d'Union

## Arborescence
Chaque landing page est une page statique (html + css) située dans son répertoire dédiée à la racine du répertoire `public`

## Déploiement
Les landing pages sont déployées dans l'application Scalingo dédiée (https://l.traitdunion.beta.gouv.fr)
Elles sont ensuite disponibles dans le sous-répertoire `/<nom du répertoire>/`
## Dévelopement
Pour visualiser les landing pages en local, exécuter `npm run dev`, puis se rendre sur `http://localhost:3000/sample/`
