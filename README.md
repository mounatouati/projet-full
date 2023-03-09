# Projet

Créer un site avec ReactJS, ExpressJS et MongoDB pour la base de données.
Le site doit avoir une Navbar responsive pour naviguer entre les page.
Et un footer a la fin de chaques pages

Le site aura une page d'acceuil qui affichera tous les articles des utilisateurs.

Un utilisteur peut s'authentifier (Inscription puis connexion), et de manière persistante en utilisant les JWT token, dans la base de données un utilisateur consiste:

- id, password, email, username, avatar

Le site aura une page de profil pour chaque utilisateur, ou:

- Les données de l'utilisateur seront affichées.
- L'utilisateur peut modifier ses informations.
- Afficher tous les articles de l'utilisateur.

L'utilisateur peut créer des articles, un article consiste en:

- id, title, content, image.


-----

Creer un dépot GitHub/GitLab  , faire un premier push sur la branche main , et inviter djemai-samy sur le dépôt 

# Etape initialisation 

- Créer deux dosiers BACK et FRONT 
-BACK:
    * npm init 
    * npm install nodemon --save-dev
    * npm install express --save

    Créez un fichier server.js 
     ==> modifier package.json : ajouter        
                         "type":"module", 
                         "script":{
                         "start":"node server.js", 
                         "dev":"nodemon server.js"
                       }	
    * npm install morgan 
    * npm install mongoose
    * npm install jsonwebtoken 
    * npm run dev 

-  Configurer server  : Dans le fichier server.js dans le dossier BACK aon créer un serveur ExpressJS 

-FRONT:
    * npx create-react-app my-app
    * cd my-app
    * npm start

    ==> modifier package.json : ajouter 
                         "proxy": "http://localhost:3001/"


# FRONT creer les composant :

Pages:
   *Auth
   *Home
   *ListeArticles
   *Navbar 
   *Footer

Containers : LoginForm 
             SignupForm

# Back creer la Base de donnée  
  
  -Creer une base de données sur MongoDB 
  -initialiser la connection dans le fichier servers.js 
- creer les: - models 
             - routes
             - controllers
- creer le fichier token.js (pour recuperer et verifier un token )

   							