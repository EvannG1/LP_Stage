# Publications

Une des fonctionnalités les plus importantes du site qui m'a été demandé : l'insertion des publications scientifiques des chercheurs de l'équipe.

Chaque chercheur possède des publications, il s’agit principalement d’articles scientifiques.
Un des objectifs qui m’a été fixé lors de ce stage, été de pouvoir récupérer automatiquement la liste des publications de tous les chercheurs de l’équipe afin que celles-ci soient visibles directement depuis le site.

Il y aurait alors la liste des publications d’un chercheur sur sa page de profil, ainsi qu’une page « Publications » regroupant les publications de tous les membres de l’équipe.

Ces publications sont principalement accessibles sur un site nommé **HAL – Archive ouverte**.

**HAL** est une plateforme en ligne développée en 2001 par le **C**entre pour la **C**ommunication **S**cientifique **D**irecte (**CCSD**) du **CNRS**.
Ce site dispose d’une **API** permettant de récupérer les publications de chaque chercheur à l’aide de plusieurs filtres :

- A l’aide de l’**ID HA**L du chercheur (s’il en possède un)
- A l’aide du nom du chercheur

J’ai commencé par faire des requêtes vers l’**API** depuis l’application **Postman** afin de voir les résultats que je pouvais récupérer.

## Premier problème : ID HAL

Premier problème, tous les membres de l’équipe ne disposent pas d’un ID HAL, et les quelques chercheurs en possédant, n’ont pas toutes leurs publications rattachées à celui-ci : d'anciennes publications sont publiées sur HAL mais sont rattachées uniquement au nom du chercheur et non pas à son ID HAL.

Je suis donc contraint de faire les recherches à l'aide du nom du chercheur. Mais avec cette méthode, l’API me retourne des publications n’appartenant pas au chercheur que je souhaite (car il y a plusieurs personnes possédant le nom « LU » par exemple).

J’ai alors rajouté un **filtre** en plus du nom, indiquant que je souhaite les publications provenant uniquement de l’**Institut Jean Lamour**. Désormais toutes les publications récupérées sont valides.

## Second problème : Publications manquantes

Peu de temps après avoir pu récupérer la liste des publications avec les données que l’on m’a demandées :
- Nom de la publication (+ lien vers HAL)
- Date de publication
- Auteurs
- DOI (+ lien vers le DOI)
- Fichier PDF associé (si disponible)
- Journal où a paru l’article
- Numéro, volume du journal
- Pages du journal

Chaque chercheur m'a fait parvenir leur liste de publications dans un document Word dans le but de vérifier si toutes les publications que j'ai récupérées automatiquement à l'aide de HAL sont valides.

Je me suis rendu compte qu’il me manquait énormément de publications, et que les membres de l’équipe n’avaient pas systématiquement publié leurs articles sur HAL mais aussi sur d’autres plateformes telles que : **ORCID** et **ResearchGate**.

Plateformes n’appartenant ni au **CNRS** ni à l’**Université de Lorraine** et ne disposants pas d’**API**.

Il y avait alors un nouveau problème, comment récupérer la liste des publications manquantes (ici on parle d’environ 200 à 300 publications manquantes, tous chercheurs compris).

J'ai dans un premier temps regardé s'il existait des extensions officielles "ResearchGate" et/ou "ORCID" : sans succès.

Par la suite j'ai alors cherché une extension WordPress permettant de créer une liste de publications trié par chercheur (ajout manuel de publications) et j’ai finalement trouvé « **TeachPress** » qui correspond parfaitement à mes besoins.

Cette extension me permet de rajouter manuellement des publications et de les associées à des personnes. De plus, il dispose d’un système d’importation au format **BibTeX**.

Ce système m’a beaucoup aidé car la plateforme ResearchGate dispose lui d’un système d’export de publication dans ce même format. Malheureusement, impossible d’exporter plusieurs publications à la fois.

Une fois toutes les publications manquantes importées et ajoutées à la main pour celles ne pouvant pas être exportées (car sur une autre plateforme), j’ai donc dû chercher un moyen pour insérer celles récupérées automatiquement à l’aide de l’**API** de HAL (pour l'instant je l'ai récupèrent depuis **Postman** mais elles ne sont pas encore insérées sur le site).

## Insertion des publications HAL

Pour insérer ces publications, plusieurs options s’offraient à moi :
- Utilisation de l’API : mais nécessite de créer une extension WordPress afin de traiter et d’afficher les données
- Utilisation de l’extension officielle HAL
- Utilisation de l’outil « Haltools »

N’ayant jamais développé d’extension WordPress, et ne pouvant assurer la maintenabilité du code dans le temps, j’ai décidé de ne pas retenir cette option.

J’ai alors décidé de tester dans un premier temps l’extension officielle **HAL** :

Cette extension permet de récupérer la liste des publications d’un ou plusieurs chercheurs à l’aide des mêmes filtres disponibles sur l’API, et est paramétrable depuis l’administration du site WordPress.

Or, après l’avoir testée, celle-ci récupère énormément d’informations qui dans le cas présent ne me sont pas utiles et génère un seul bloc HTML pour toutes ces informations, il m’est donc impossible de mélanger les publications **HAL** ainsi que celles rajoutées manuellement à l’aide de **TeachPress**. Or je souhaite que les deux systèmes se complètent entre eux.

Autre problème, l’extension met énormément de temps à répondre, une page peut mettre jusqu’à 30 secondes à charger avant de finalement s’afficher.

## L’outil Haltools

L’outil « Haltools » est un **outil en ligne** fourni par **HAL** permettant d’insérer facilement des publications sur nos propres applications web à l’aide d’une balise « **iframe** » générée par celui-ci.

Cet outil se présente sous la forme d’un formulaire, et permet tout comme l’API de **filtrer** les publications que nous voulons récupérer.

L’avantage de cette solution est que le système nous fournit directement un code HTML **prêt à l’emploi**, ce qui est donc très facilement intégrable sur le site WordPress.

De plus, il permet aussi d’injecter du code **CSS** personnalisé afin d’adapter le style des publications au design de notre site.

Ce système permet aussi de retourner uniquement les données dont j’ai besoin, je peux donc facilement intégrer cette balise « iframe » avec les publications **TeachPress** (ajoutées manuellement).

Finalement, les publications **HAL** et **TeachPress** se complètent entre eux, et sont triées par année (2021 à 2015 puis un onglet « Older »).

Ci-dessous, un aperçu du rendu final des publications :

[![Publications](/assets/img/publications.png)](/assets/img/publications.png)

Comme demandé par l’équipe, nous pouvons voir dans un premier temps l’**intitulé** de la publication (lien cliquable vers HAL), les **auteurs**, le **journal** où l’article est paru, le **DOI** (lien cliquable vers DOI.org) ainsi que le fichier **PDF associé** (lien cliquable).

Par ailleurs, puisque Haltools récupère en temps réel les publications, si un chercheur de l’équipe vient à publier un nouvel article, celui-ci sera automatiquement récupéré par Haltools et sera alors affiché **automatiquement** sur le site de l’équipe. Ce système permet donc de conserver la même efficacité que l’utilisation de l’API : alimenter **automatiquement** le site internet.