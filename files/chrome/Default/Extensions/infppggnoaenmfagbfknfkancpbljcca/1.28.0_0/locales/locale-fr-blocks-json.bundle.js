"use strict";(self.webpackChunkautoma=self.webpackChunkautoma||[]).push([[531],{52627:(e,n,r)=>{r.r(n),r.d(n,{default:()=>t});const t={collection:{blocks:{"export-result":{name:e=>{const{normalize:n}=e;return n(["Exporter le résultat"])},description:e=>{const{normalize:n}=e;return n(["Exporte le résultat de la collection au format JSON"])}}}},workflow:{blocks:{base:{title:e=>{const{normalize:n}=e;return n(["Blocs"])},moveToGroup:e=>{const{normalize:n}=e;return n(["Déplacer le bloc vers le groupe de blocs"])},selector:e=>{const{normalize:n}=e;return n(["Sélecteur d'éléments"])},selectorOptions:e=>{const{normalize:n}=e;return n(["Options du Sélecteur"])},timeout:e=>{const{normalize:n}=e;return n(["Délai d'attente (millisecondes)"])},noPermission:e=>{const{normalize:n}=e;return n(["Automa n'a pas les droits nécessaires pour effectuer cette action"])},grantPermission:e=>{const{normalize:n}=e;return n(["Accorder les droits"])},action:e=>{const{normalize:n}=e;return n(["Action"])},element:{select:e=>{const{normalize:n}=e;return n(["Choisir un element"])},verify:e=>{const{normalize:n}=e;return n(["Vérifier le sélecteur"])}},settings:{title:e=>{const{normalize:n}=e;return n(["Paramètres du Bloc"])},blockTimeout:{title:e=>{const{normalize:n}=e;return n(["Délai d'éxécution du bloc (millisecond)"])},description:e=>{const{normalize:n}=e;return n(["Durée maximale d'attente pour l'éxécution du Bloc (0 pour désactiver)"])}},line:{title:e=>{const{normalize:n}=e;return n(["Lignes"])},label:e=>{const{normalize:n}=e;return n(["Label"])},animated:e=>{const{normalize:n}=e;return n(["Animé"])},select:e=>{const{normalize:n}=e;return n(["Choisir une ligne"])},to:e=>{const{normalize:n,interpolate:r,named:t}=e;return n(["N° ligne en ",r(t("name"))," block"])},lineColor:e=>{const{normalize:n}=e;return n(["Couleur"])}}},toggle:{enable:e=>{const{normalize:n}=e;return n(["Activer le bloc"])},disable:e=>{const{normalize:n}=e;return n(["Désactiver le bloc"])}},onError:{info:e=>{const{normalize:n}=e;return n(["Ces règles seront appliquées en cas d'erreur dans le bloc"])},button:e=>{const{normalize:n}=e;return n(["Si Erreur"])},title:e=>{const{normalize:n}=e;return n(["Quand une errur survient"])},retry:e=>{const{normalize:n}=e;return n(["Retenter l'action"])},fallbackTitle:e=>{const{normalize:n}=e;return n(["Exécuté en cas d'erreur"])},times:{name:e=>{const{normalize:n}=e;return n(["Essais"])},description:e=>{const{normalize:n}=e;return n(["Nombre d'essais pour éxécuter l'action"])}},interval:{name:e=>{const{normalize:n}=e;return n(["Intervalle"])},description:e=>{const{normalize:n}=e;return n(["Durée de l'intervalle entre chaque essai"])},second:e=>{const{normalize:n}=e;return n(["secondes"])}},toDo:{error:e=>{const{normalize:n}=e;return n(["en cas d'erreur"])},continue:e=>{const{normalize:n}=e;return n(["Continuer le processus"])},fallback:e=>{const{normalize:n}=e;return n(["Fonction de substitution"])},restart:e=>{const{normalize:n}=e;return n(["Redémarrer le processus"])}},insertData:{name:e=>{const{normalize:n}=e;return n(["Entrer des données"])}}},table:{checkbox:e=>{const{normalize:n}=e;return n(["Insérer dans le tableau"])},select:e=>{const{normalize:n}=e;return n(["Selectionner une colonne"])},extraRow:{checkbox:e=>{const{normalize:n}=e;return n(["Ajouter une ligne supplémentaire"])},placeholder:e=>{const{normalize:n}=e;return n(["Valeur"])},title:e=>{const{normalize:n}=e;return n(["Valeur de la ligne supplémentaire"])}}},findElement:{placeholder:e=>{const{normalize:n}=e;return n(["Rechercher un élément par"])},options:{cssSelector:e=>{const{normalize:n}=e;return n(["Sélecteur CSS"])},xpath:e=>{const{normalize:n}=e;return n(["XPath"])}}},markElement:{title:e=>{const{normalize:n}=e;return n(["Un élément ne sera pas sélectionné s'il a déjà été sélectionné avant"])},text:e=>{const{normalize:n}=e;return n(["Marquer l'élément"])}},multiple:{title:e=>{const{normalize:n}=e;return n(["Sélectionner plusieurs éléments"])},text:e=>{const{normalize:n}=e;return n(["Multiple"])}},waitSelector:{title:e=>{const{normalize:n}=e;return n(["Attendre le sélecteur"])},timeout:e=>{const{normalize:n}=e;return n(["Délai d'attente du sélecteur (ms)"])}},downloads:{onConflict:{uniquify:e=>{const{normalize:n}=e;return n(["Rendre unique"])},overwrite:e=>{const{normalize:n}=e;return n(["Ecraser"])},prompt:e=>{const{normalize:n}=e;return n(["Demander"])}}}},"wait-connections":{name:e=>{const{normalize:n}=e;return n(["Attendre les connexions"])},description:e=>{const{normalize:n}=e;return n(["Attendre que les connexions soient établies avant de continuer"])},specificFlow:e=>{const{normalize:n}=e;return n(["Continuer un processus spécifique"])},selectFlow:e=>{const{normalize:n}=e;return n(["Choisir un processus"])}},cookie:{name:e=>{const{normalize:n}=e;return n(["Cookie"])},description:e=>{const{normalize:n}=e;return n(["Lire, définir, ou supprimer des cookies"])},types:{get:e=>{const{normalize:n}=e;return n(["Lire un cookie"])},set:e=>{const{normalize:n}=e;return n(["Définir un cookie"])},remove:e=>{const{normalize:n}=e;return n(["Supprimer des cookies"])},getAll:e=>{const{normalize:n}=e;return n(["Lire tous les cookies"])}},useJson:e=>{const{normalize:n}=e;return n(["Utiliser le format JSON"])}},note:{name:e=>{const{normalize:n}=e;return n(["Note"])}},"slice-variable":{name:e=>{const{normalize:n}=e;return n(["Extraction (Slice)"])},description:e=>{const{normalize:n}=e;return n(["Extraire une section de la chaine d'une variable"])},start:e=>{const{normalize:n}=e;return n(["Indice de début"])},end:e=>{const{normalize:n}=e;return n(["Indice de fin"])}},"workflow-state":{name:e=>{const{normalize:n}=e;return n(["Etats du Workflow"])},description:e=>{const{normalize:n}=e;return n(["Contrôler les états du workflow"])},actions:{stop:e=>{const{normalize:n}=e;return n(["Arrêter le workflow"])}}},"regex-variable":{name:e=>{const{normalize:n}=e;return n(["formule RegEx"])},description:e=>{const{normalize:n}=e;return n(["Utiliser une formule RegEx sur la valeur d'une variable"])}},"data-mapping":{source:e=>{const{normalize:n}=e;return n(["Source"])},destination:e=>{const{normalize:n}=e;return n(["Destination"])},name:e=>{const{normalize:n}=e;return n(["Affectation des données"])},edit:e=>{const{normalize:n}=e;return n(["Editer l'affectation des données"])},dataSource:e=>{const{normalize:n}=e;return n(["Source des données"])},description:e=>{const{normalize:n}=e;return n(["Affecter les données d'une variable ou d'un tableau"])},addSource:e=>{const{normalize:n}=e;return n(["Ajouter une source"])},addDestination:e=>{const{normalize:n}=e;return n(["Ajouter une destination"])}},"sort-data":{name:e=>{const{normalize:n}=e;return n(["Classer les données"])},description:e=>{const{normalize:n}=e;return n(["Ordonner les éléments des données"])},property:e=>{const{normalize:n}=e;return n(["Classer en fonction des propriétés de l'élément"])},addProperty:e=>{const{normalize:n}=e;return n(["Ajouter une propriété"])}},"increase-variable":{name:e=>{const{normalize:n}=e;return n(["Augmenter une variable"])},description:e=>{const{normalize:n}=e;return n(["Augmenter la valeur d'une variable d'un montant donné"])},increase:e=>{const{normalize:n}=e;return n(["Augmenter de"])}},notification:{name:e=>{const{normalize:n}=e;return n(["notification"])},description:e=>{const{normalize:n}=e;return n(["Afficher une notification"])},title:e=>{const{normalize:n}=e;return n(["Titre"])},message:e=>{const{normalize:n}=e;return n(["Message"])},imageUrl:e=>{const{normalize:n}=e;return n(["Adresse de l'image (optionnel)"])},iconUrl:e=>{const{normalize:n}=e;return n(["Adresse de l'icone (optionnel)"])}},"delete-data":{name:e=>{const{normalize:n}=e;return n(["Supprimer les données"])},description:e=>{const{normalize:n}=e;return n(["Supprimer le contenu d'un tableau ou d'une variable"])},from:e=>{const{normalize:n}=e;return n(["Données provenant de"])},allColumns:e=>{const{normalize:n}=e;return n(["[Toutes les colonnes]"])}},"log-data":{name:e=>{const{normalize:n}=e;return n(["Voir le log"])},description:e=>{const{normalize:n}=e;return n(["Visualiser les données de log récentes relatives au workflow"])},data:e=>{const{normalize:n}=e;return n(["Données du log"])}},"tab-url":{name:e=>{const{normalize:n}=e;return n(["Obtenir l'URL de l'onglet"])},description:e=>{const{normalize:n}=e;return n(["Obtenir l'URL de l'onglet"])},select:e=>{const{normalize:n}=e;return n(["Sélectionner l'onglet"])},types:{"active-tab":e=>{const{normalize:n}=e;return n(["Activer l'onglet"])},all:e=>{const{normalize:n}=e;return n(["Tous les onglets"])}},query:{title:e=>{const{normalize:n}=e;return n(["Requête"])},matchPatterns:e=>{const{normalize:n,linked:r,type:t}=e;return n([r("workflow.blocks.switch-tab.matchPattern",void 0,t)," (optionnel)"])},tabTitle:e=>{const{normalize:n}=e;return n(["Intitulé de l'onglet (optionnel)"])}}},"reload-tab":{name:e=>{const{normalize:n}=e;return n(["Recharger l'onglet"])},description:e=>{const{normalize:n}=e;return n(["Recharger l'onglet actif"])}},"press-key":{name:e=>{const{normalize:n}=e;return n(["Appuyer sur une touche"])},description:e=>{const{normalize:n}=e;return n(["Appuyer sur une touche ou une combinaison"])},target:e=>{const{normalize:n}=e;return n(["Element cible (optionnel)"])},key:e=>{const{normalize:n}=e;return n(["Touche"])},detect:e=>{const{normalize:n}=e;return n(["Detecter les touches"])},actions:{"press-key":e=>{const{normalize:n}=e;return n(["Appuyer sur une touche"])},"multiple-keys":e=>{const{normalize:n}=e;return n(["Appuyer sur plusieurs touches"])}}},"save-assets":{name:e=>{const{normalize:n}=e;return n(["Sauvegarder les assets"])},description:e=>{const{normalize:n}=e;return n(["Sauvegarder les assets (image, video, audio, ou fichier) d'un élément ou d'une URL"])},filename:e=>{const{normalize:n}=e;return n(["Fichier (optionnel)"])},saveDownloadIds:e=>{const{normalize:n}=e;return n(["Sauvegarder les éléments' récupérer les IDs"])},contentTypes:{title:e=>{const{normalize:n}=e;return n(["Type"])},element:e=>{const{normalize:n}=e;return n(["Media (image, audio, ou video)"])},url:e=>{const{normalize:n}=e;return n(["URL"])}}},"handle-dialog":{name:e=>{const{normalize:n}=e;return n(["Boites de dialogue"])},description:e=>{const{normalize:n}=e;return n(["Valider ou ignorer les boites de dialogue Javascript (alerte, confirmation, demande, ou onbeforeunload"])},accept:e=>{const{normalize:n}=e;return n(["Valider"])},promptText:{label:e=>{const{normalize:n}=e;return n(["Texte à insérer (optionnel)"])},description:e=>{const{normalize:n}=e;return n(["Le texte à insérer dans la boite de dialogue avant de valider"])}}},"handle-download":{name:e=>{const{normalize:n}=e;return n(["Téléchargement"])},description:e=>{const{normalize:n}=e;return n(["Options de téléchargement des fichiers"])},timeout:e=>{const{normalize:n}=e;return n(["Délai d'attente (millisecondes)"])},noPermission:e=>{const{normalize:n}=e;return n(["Vous n'êtes pas autorisé à accéder au répertoire de téléchargement"])},onConflict:e=>{const{normalize:n}=e;return n(["Si collision"])},waitFile:e=>{const{normalize:n}=e;return n(["Attendre la fin du téLéchargement de fichier"])},downloadId:e=>{const{normalize:n}=e;return n(["ID du fichier téléchargé (optionnel)"])},filePath:e=>{const{normalize:n}=e;return n(["Chemin du fichier"])}},"insert-data":{name:e=>{const{normalize:n}=e;return n(["Insérer des données"])},description:e=>{const{normalize:n}=e;return n(["Insérer des données dans la table ou une variable"])}},clipboard:{name:e=>{const{normalize:n}=e;return n(["Presse-papiers"])},description:e=>{const{normalize:n}=e;return n(["Récupérer le texte copié à partir du presse-papiers"])},data:e=>{const{normalize:n}=e;return n(["Données du presse-papiers"])},noPermission:e=>{const{normalize:n}=e;return n(["Vous n'êtes pas autorisé à accéder au presse-papiers"])},grantPermission:e=>{const{normalize:n}=e;return n(["Donner la permission"])}},"hover-element":{name:e=>{const{normalize:n}=e;return n(["Survoler un élément"])},description:e=>{const{normalize:n}=e;return n(["Survolez un élément"])}},"create-element":{name:e=>{const{normalize:n}=e;return n(["Créer un élément"])},description:e=>{const{normalize:n}=e;return n(["Créer un élément et l'injecter dans la page"])},edit:e=>{const{normalize:n}=e;return n(["Modifier un élément"])},wrap:e=>{const{normalize:n}=e;return n(["Insérer un élément entre"])},insertEl:{title:e=>{const{normalize:n}=e;return n(["Insérer un élément"])},items:{before:e=>{const{normalize:n}=e;return n(["comme 'first child' (premier enfant"])},after:e=>{const{normalize:n}=e;return n(["comme 'last child' (dernier enfant)"])},"next-sibling":e=>{const{normalize:n}=e;return n(["en tant que prochain voisin"])},"prev-sibling":e=>{const{normalize:n}=e;return n(["en tant que précédent voisin"])},replace:e=>{const{normalize:n}=e;return n(["Remplace l'élément cible"])}}}},"upload-file":{name:e=>{const{normalize:n}=e;return n(["Envoyer un fichier"])},description:e=>{const{normalize:n}=e;return n(['Envoyer le fichier dans l\'élément <input type="file">'])},filePath:e=>{const{normalize:n}=e;return n(["URL ou chemin d'accès au fichier"])},addFile:e=>{const{normalize:n}=e;return n(["Ajouter un fichier"])},requirement:e=>{const{normalize:n}=e;return n(["Voir les conditions requises avant d'utiliser ce bloc"])},noFileAccess:e=>{const{normalize:n}=e;return n(["Automa n'a pas accès aux fichiers"])}},"browser-event":{name:e=>{const{normalize:n}=e;return n(["Événement du navigateur"])},description:e=>{const{normalize:n}=e;return n(["Exécuter le bloc suivant lorsque l'événement est déclenché"])},events:e=>{const{normalize:n}=e;return n(["Événements"])},timeout:e=>{const{normalize:n}=e;return n(["Délai d'attente (millisecondes)"])},activeTabLoaded:e=>{const{normalize:n}=e;return n(["Onglet actif"])},setAsActiveTab:e=>{const{normalize:n}=e;return n(["Définir comme onglet actif"])}},"blocks-group":{name:e=>{const{normalize:n}=e;return n(["Groupe de blocs"])},groupName:e=>{const{normalize:n}=e;return n(["Nom du groupe"])},description:e=>{const{normalize:n}=e;return n(["Regroupement de blocs"])},dropText:e=>{const{normalize:n}=e;return n(["Faites glisser et déposez un bloc ici"])},cantAdd:e=>{const{normalize:n,interpolate:r,named:t}=e;return n(["Impossible d'ajouter le bloc \"",r(t("blockName")),'" au groupe.'])}},trigger:{name:e=>{const{normalize:n}=e;return n(["Déclencheur"])},description:e=>{const{normalize:n}=e;return n(["Bloc où le workflow commencera à s'exécuter"])},addTime:e=>{const{normalize:n}=e;return n(["Ajouter une heure"])},selectDay:e=>{const{normalize:n}=e;return n(["Sélectionnez un jour"])},timeExist:e=>{const{normalize:n,interpolate:r,named:t}=e;return n(["Vous avez déjà ajouté ",r(t("time"))," le ",r(t("day"))])},fixedDelay:e=>{const{normalize:n}=e;return n(["Délai fixe"])},contextMenus:{noPermission:e=>{const{normalize:n}=e;return n(['Ce déclencheur requiert les autorisations "contextMenus" pour fonctionner'])},grantPermission:e=>{const{normalize:n}=e;return n(["Autoriser"])},appearIn:e=>{const{normalize:n}=e;return n(["figurera dans"])},contextName:e=>{const{normalize:n}=e;return n(["Nom du workflow dans le menu contextuel"])}},days:[e=>{const{normalize:n}=e;return n(["Dimanche"])},e=>{const{normalize:n}=e;return n(["Lundi"])},e=>{const{normalize:n}=e;return n(["Mardi"])},e=>{const{normalize:n}=e;return n(["Mercredi"])},e=>{const{normalize:n}=e;return n(["Jeudi"])},e=>{const{normalize:n}=e;return n(["Vendredi"])},e=>{const{normalize:n}=e;return n(["Samedi"])}],useRegex:e=>{const{normalize:n}=e;return n(["Utiliser une Regex"])},shortcut:{tooltip:e=>{const{normalize:n}=e;return n(["Enregistrer un raccourci"])},stopRecord:e=>{const{normalize:n}=e;return n(["Arrête d'enregistrer"])},checkboxTitle:e=>{const{normalize:n}=e;return n(["Exécuter le raccourci même lorsque vous êtes dans un élément de saisie"])},checkbox:e=>{const{normalize:n}=e;return n(["Actif dans un élément de saisie"])},note:e=>{const{normalize:n}=e;return n(["Note: le raccourci clavier ne fonctionne que lorsque vous êtes sur une page web"])}},forms:{triggerWorkflow:e=>{const{normalize:n}=e;return n(["Déclencher le workflow"])},interval:e=>{const{normalize:n}=e;return n(["Intervalle (minutes)"])},delay:e=>{const{normalize:n}=e;return n(["Délai (minutes)"])},date:e=>{const{normalize:n}=e;return n(["Date"])},time:e=>{const{normalize:n}=e;return n(["Heure"])},url:e=>{const{normalize:n}=e;return n(["URL ou Regex"])},shortcut:e=>{const{normalize:n}=e;return n(["Rccourci"])}},"element-change":{target:e=>{const{normalize:n}=e;return n(["Choisir l'élément à observer"])},optionsInfo:e=>{const{normalize:n}=e;return n(["Quelle mutation déclenchera le workflow"])},targetWebsite:e=>{const{normalize:n}=e;return n(["La modèle correspondant du site où se trouve l'élément ciblé (cliquer pour voir plus d'exemples de Modèles)"])},baseEl:{title:e=>{const{normalize:n}=e;return n(["Elément de base (optionnel)"])},description:e=>{const{normalize:n}=e;return n(["Automa redémarrera l'observation de l'élément ciblé quand cet élément sera modifié"])}},subtree:{title:e=>{const{normalize:n}=e;return n(["Inclure 'Subtree'"])},description:e=>{const{normalize:n}=e;return n(["Etendre l'observation à toute la hiérarchie descendante de l'élément ciblé"])}},childList:{title:e=>{const{normalize:n}=e;return n(["'Child list'"])},description:e=>{const{normalize:n}=e;return n(["Observer l'ajout de nouveaux éléments-enfants ou la suppression d'éléments-enfants existants"])}},attributes:{title:e=>{const{normalize:n}=e;return n(["'Attributes'"])},description:e=>{const{normalize:n}=e;return n(["Observer les mutations sur les valeurs des attributs de l'élément ciblé"])}},attributeFilter:{title:e=>{const{normalize:n}=e;return n(["'Attrobute Filter' (Filtre des attributs)"])},separate:e=>{const{normalize:n}=e;return n(["Utiliser des virgules (,) entre chaque nom d'attribut"])},description:e=>{const{normalize:n}=e;return n(["Observer uniquement certains attributs (laisser vide pour tout observer)"])}},characterData:{title:e=>{const{normalize:n}=e;return n(["'Character data' (caractères)"])},description:e=>{const{normalize:n}=e;return n(["Observe les mutations de caractères/texte au sein de l'élément ciblé"])}}},items:{manual:e=>{const{normalize:n}=e;return n(["Manuellement"])},interval:e=>{const{normalize:n}=e;return n(["Intervalle"])},"cron-job":e=>{const{normalize:n}=e;return n(["Tache programmée (Cron job)"])},date:e=>{const{normalize:n}=e;return n(["À une date précise"])},"context-menu":e=>{const{normalize:n}=e;return n(["Menu contextuel"])},"element-change":e=>{const{normalize:n}=e;return n(["Quand un élément est modifié"])},"specific-day":e=>{const{normalize:n}=e;return n(["À un jour précis"])},"visit-web":e=>{const{normalize:n}=e;return n(["Lorsque vous visitez un site Web"])},"on-startup":e=>{const{normalize:n}=e;return n(["Au démarrage du navigateur"])},"keyboard-shortcut":e=>{const{normalize:n}=e;return n(["Raccourci clavier"])}}},"execute-workflow":{name:e=>{const{normalize:n}=e;return n(["Executer le workflow"])},overwriteNote:e=>{const{normalize:n}=e;return n(["Cela écrasera les données globales du workflow sélectionné"])},select:e=>{const{normalize:n}=e;return n(["Selectionner le workflow"])},executeId:e=>{const{normalize:n}=e;return n(["Executer l'id"])},description:e=>{const{normalize:n}=e;return n([])},insertAllVars:e=>{const{normalize:n}=e;return n(["Utiliser toutes les variables du workflow actuel"])},insertVars:e=>{const{normalize:n}=e;return n(["Insérer les variables du workflow actuel"])},useCommas:e=>{const{normalize:n}=e;return n(["Utiliser des virgules pour séparer les noms de variable"])}},"google-sheets-drive":{name:e=>{const{normalize:n,linked:r,type:t}=e;return n([r("workflow.blocks.google-sheets.name",void 0,t)," (GDrive)"])},description:e=>{const{normalize:n,linked:r,type:t}=e;return n([r("workflow.blocks.google-sheets.description",void 0,t)])},connected:e=>{const{normalize:n}=e;return n(["Feuilles de calcul connectées"])},select:e=>{const{normalize:n}=e;return n(["Choisir une feuille de calcul"])},connect:e=>{const{normalize:n}=e;return n(["Connecter une feuille de calcul"])}},"google-drive":{name:e=>{const{normalize:n}=e;return n(["Google Drive"])},description:e=>{const{normalize:n}=e;return n(["Téléverser des fichiers vers Google Drive"])},actions:{upload:e=>{const{normalize:n}=e;return n(["Téléverser des fichiers"])}}},"google-sheets":{name:e=>{const{normalize:n}=e;return n(["Google sheets"])},description:e=>{const{normalize:n}=e;return n(["Lire ou mettre à jour les données Google Sheets"])},previewData:e=>{const{normalize:n}=e;return n(["Aperçu des données"])},firstRow:e=>{const{normalize:n}=e;return n(["Utilisez la première ligne comme clés"])},keysAsFirstRow:e=>{const{normalize:n}=e;return n(["Utiliser les clés comme première ligne"])},insertData:e=>{const{normalize:n}=e;return n(["Insérer des données"])},valueInputOption:e=>{const{normalize:n}=e;return n(["Option de saisie de valeur"])},dataFrom:{label:e=>{const{normalize:n}=e;return n(["Données de"])},options:{"data-columns":e=>{const{normalize:n}=e;return n(["Table"])},"custom-data":e=>{const{normalize:n}=e;return n(["Données personnalisées"])}}},refKey:{label:e=>{const{normalize:n}=e;return n(["Clé de référence (facultatif)"])},placeholder:e=>{const{normalize:n}=e;return n(["Nom de la clé"])}},spreadsheetId:{label:e=>{const{normalize:n}=e;return n(["Identifiant de la feuille de calcul"])},link:e=>{const{normalize:n}=e;return n(["Découvrez comment obtenir un identifiant de feuille de calcul"])}},range:{label:e=>{const{normalize:n}=e;return n(["Plage"])},link:e=>{const{normalize:n}=e;return n(["Cliquez pour voir plus d'exemple"])}},select:{get:e=>{const{normalize:n}=e;return n(["Obtenir les valeurs des cellules de la feuille de calcul"])},getRange:e=>{const{normalize:n}=e;return n(["Obtenir la plage de valeurs de la feuille de calcul"])},update:e=>{const{normalize:n}=e;return n(["Mettre à jour les valeurs des cellules de la feuille de calcul"])},append:e=>{const{normalize:n}=e;return n(["Ajouter les valeurs des cellules à la feuille de calcul"])},clear:e=>{const{normalize:n}=e;return n(["Effacer les valeurs des cellules"])},create:e=>{const{normalize:n}=e;return n(["Créer une feuille de calcul"])},"add-sheet":e=>{const{normalize:n}=e;return n(["Ajouter une feuille de calcul"])}}},"active-tab":{name:e=>{const{normalize:n}=e;return n(["Onglet actif"])},description:e=>{const{normalize:n}=e;return n(["Définit l'onglet actuel dans lequel vous vous trouvez en tant qu'onglet actif"])}},proxy:{name:e=>{const{normalize:n}=e;return n(["Proxy"])},description:e=>{const{normalize:n}=e;return n(["Définit le proxy du navigateur"])},clear:e=>{const{normalize:n}=e;return n(["Effacer tous les proxys"])},bypass:{label:e=>{const{normalize:n}=e;return n(["Liste des contournements"])},note:e=>{const{normalize:n}=e;return n(["Utilisez des virgules (,) pour séparer les URLs"])}}},"new-window":{name:e=>{const{normalize:n}=e;return n(["Nouvelle fenêtre"])},description:e=>{const{normalize:n}=e;return n(["Créer une nouvelle fenêtre"])},top:e=>{const{normalize:n}=e;return n(["Haut"])},left:e=>{const{normalize:n}=e;return n(["Gauche"])},height:e=>{const{normalize:n}=e;return n(["Hauteur"])},width:e=>{const{normalize:n}=e;return n(["Largeur"])},note:e=>{const{normalize:n}=e;return n(["Remarque : utilisez 0 pour désactiver"])},position:e=>{const{normalize:n}=e;return n(["Position de la fenêtre"])},size:e=>{const{normalize:n}=e;return n(["Taille de la fenêtre"])},windowState:{placeholder:e=>{const{normalize:n}=e;return n(["État de la fenêtre"])},options:{normal:e=>{const{normalize:n}=e;return n(["Normale"])},minimized:e=>{const{normalize:n}=e;return n(["Minimisée"])},maximized:e=>{const{normalize:n}=e;return n(["Maximisée"])},fullscreen:e=>{const{normalize:n}=e;return n(["Plein écran"])}}},incognito:{text:e=>{const{normalize:n}=e;return n(["Définir comme fenêtre de navigation privée"])},note:e=>{const{normalize:n}=e;return n(["Vous devez activer « Autoriser en navigation privée » pour que cette extension puisse utiliser l'option"])}}},"go-back":{name:e=>{const{normalize:n}=e;return n(["Revenir en arrière"])},description:e=>{const{normalize:n}=e;return n(["Retourne à la page précédente"])}},"forward-page":{name:e=>{const{normalize:n}=e;return n(["Avancer"])},description:e=>{const{normalize:n}=e;return n(["Aller à la page suivante"])}},"close-tab":{name:e=>{const{normalize:n}=e;return n(["Fermer l'onglet"])},description:e=>{const{normalize:n}=e;return n([])},activeTab:e=>{const{normalize:n}=e;return n(["Ferme l'onglet actif"])},url:e=>{const{normalize:n}=e;return n(["URL ou modèle de correspondance"])},allWindows:e=>{const{normalize:n}=e;return n(["Fermez toutes les fenêtres"])}},"event-click":{name:e=>{const{normalize:n}=e;return n(["Cliquer sur l'élément"])},description:e=>{const{normalize:n}=e;return n([])}},delay:{name:e=>{const{normalize:n}=e;return n(["Délai"])},description:e=>{const{normalize:n}=e;return n(["Ajoute un délai avant d'exécuter le bloc suivant"])},input:{title:e=>{const{normalize:n}=e;return n(["Délai en milliseconde"])},placeholder:e=>{const{normalize:n}=e;return n(["(milliseconde)"])}}},"get-text":{name:e=>{const{normalize:n}=e;return n(["Obtenir le texte"])},description:e=>{const{normalize:n}=e;return n(["Obtenir le texte d'un élément"])},checkbox:e=>{const{normalize:n}=e;return n(["Enregistrer les données"])},includeTags:e=>{const{normalize:n}=e;return n(["Inclure les balises HTML"])},prefixText:{placeholder:e=>{const{normalize:n}=e;return n(["Préfixe du texte"])},title:e=>{const{normalize:n}=e;return n(["Ajouter un préfixe au texte"])}},suffixText:{placeholder:e=>{const{normalize:n}=e;return n(["Suffixe du texte"])},title:e=>{const{normalize:n}=e;return n(["Ajouter un suffixe au texte"])}}},"export-data":{name:e=>{const{normalize:n}=e;return n(["Exporter les données"])},description:e=>{const{normalize:n}=e;return n(["Exporte les colonnes de données du workflow"])},exportAs:e=>{const{normalize:n}=e;return n(["Exporter en tant que"])},refKey:e=>{const{normalize:n}=e;return n(["Clé de référence"])},bomHeader:e=>{const{normalize:n}=e;return n(["Ajouter la nomenclature UTF-8"])},dataToExport:{placeholder:e=>{const{normalize:n}=e;return n(["Données à exporter"])},options:{"data-columns":e=>{const{normalize:n}=e;return n(["Table"])},"google-sheets":e=>{const{normalize:n}=e;return n(["Google sheets"])},variable:e=>{const{normalize:n}=e;return n(["Variable"])}}}},"element-scroll":{name:e=>{const{normalize:n}=e;return n(["Défiler l'élément"])},description:e=>{const{normalize:n}=e;return n([])},scrollY:e=>{const{normalize:n}=e;return n(["Défilement vertical"])},scrollX:e=>{const{normalize:n}=e;return n(["Défilement horizontal"])},intoView:e=>{const{normalize:n}=e;return n(["Défiler dans la vue"])},smooth:e=>{const{normalize:n}=e;return n(["Défilement fluide"])},incScrollX:e=>{const{normalize:n}=e;return n(["Incrémenter le défilement horizontal"])},incScrollY:e=>{const{normalize:n}=e;return n(["Incrémenter le défilement vertical"])}},"switch-tab":{name:e=>{const{normalize:n}=e;return n(["Changer d'onglet"])},description:e=>{const{normalize:n}=e;return n(["Basculer entre les onglets"])},matchPattern:e=>{const{normalize:n}=e;return n(["Modèles de correspondance"])},url:e=>{const{normalize:n}=e;return n(["URL du nouvel onglet"])},createIfNoMatch:e=>{const{normalize:n}=e;return n(["Créer s'il n'y a pas de correspondance"])}},"new-tab":{name:e=>{const{normalize:n}=e;return n(["Nouvel onglet"])},description:e=>{const{normalize:n}=e;return n([])},url:e=>{const{normalize:n}=e;return n(["URL du nouvel onglet"])},customUserAgent:e=>{const{normalize:n}=e;return n(["Utiliser un User-Agent personnalisé"])},activeTab:e=>{const{normalize:n}=e;return n(["Définir comme onglet actif"])},tabToGroup:e=>{const{normalize:n}=e;return n(["Ajouter l'onglet au groupe"])},waitTabLoaded:e=>{const{normalize:n}=e;return n(["Attendre la fin du chargement de l'onglet"])},updatePrevTab:{title:e=>{const{normalize:n}=e;return n(["Utilise le nouvel onglet précédemment ouvert au lieu d'en créer un nouveau"])},text:e=>{const{normalize:n}=e;return n(["Mettre à jour l'onglet précédemment ouvert"])}}},link:{name:e=>{const{normalize:n}=e;return n(["Lien"])},description:e=>{const{normalize:n}=e;return n(["Ouvre le lien d'un élément"])},openInNewTab:e=>{const{normalize:n}=e;return n(["Ouvrir dans un nouvel onglet"])}},"attribute-value":{name:e=>{const{normalize:n}=e;return n(["Valeur de l'attribut"])},description:e=>{const{normalize:n}=e;return n(["Obtenir la valeur de l'attribut d'un élément"])},forms:{name:e=>{const{normalize:n}=e;return n(["Nom de l'attribut"])},checkbox:e=>{const{normalize:n}=e;return n(["Enregistrer des données"])},column:e=>{const{normalize:n}=e;return n(["Sélectionnez la colonne"])},extraRow:{checkbox:e=>{const{normalize:n}=e;return n(["Ajouter une ligne supplémentaire"])},placeholder:e=>{const{normalize:n}=e;return n(["Valeur"])},title:e=>{const{normalize:n}=e;return n(["Valeur de la ligne supplémentaire"])}}}},forms:{name:e=>{const{normalize:n}=e;return n(["Formulaires"])},description:e=>{const{normalize:n}=e;return n([])},selected:e=>{const{normalize:n}=e;return n(["Selectionné"])},type:e=>{const{normalize:n}=e;return n(["Type de formulaire"])},getValue:e=>{const{normalize:n}=e;return n(["Obtenir la valeur du formulaire"])},"text-field":{name:e=>{const{normalize:n}=e;return n(["Champ de texte"])},value:e=>{const{normalize:n}=e;return n(["Valeur"])},clearValue:e=>{const{normalize:n}=e;return n(["Effacer la valeur du formulaire"])},delay:{placeholder:e=>{const{normalize:n}=e;return n(["Délai"])},label:e=>{const{normalize:n}=e;return n(["Délai de frappe (milliseconde) (0 pour désactiver)"])}}},select:{name:e=>{const{normalize:n}=e;return n(["Sélection"])}},radio:{name:e=>{const{normalize:n}=e;return n(["Radio"])}},checkbox:{name:e=>{const{normalize:n}=e;return n(["Case à cocher"])}}},"repeat-task":{name:e=>{const{normalize:n}=e;return n(["Répéter la tâche"])},description:e=>{const{normalize:n}=e;return n([])},times:e=>{const{normalize:n}=e;return n(["fois"])},repeatFrom:e=>{const{normalize:n}=e;return n(["Répéter depuis"])}},"javascript-code":{name:e=>{const{normalize:n}=e;return n(["Code JavaScript"])},description:e=>{const{normalize:n}=e;return n(["Exécutez votre code javascript dans la page web"])},availabeFuncs:e=>{const{normalize:n}=e;return n(["Méthodes disponibles:"])},removeAfterExec:e=>{const{normalize:n}=e;return n(["Supprimer après l'exécution du bloc"])},everyNewTab:e=>{const{normalize:n}=e;return n(["Executer dans chaque nouvel onglet"])},context:{name:e=>{const{normalize:n}=e;return n(["Contexte d'éxécution"])},items:{website:e=>{const{normalize:n}=e;return n(["Onglet actif"])},background:e=>{const{normalize:n}=e;return n(["Tâche de fond"])}}},modal:{tabs:{code:e=>{const{normalize:n}=e;return n(["Code JavaScript"])},preloadScript:e=>{const{normalize:n}=e;return n(["Script de préchargement"])}}},timeout:{placeholder:e=>{const{normalize:n}=e;return n(["Délai d'attente"])},title:e=>{const{normalize:n}=e;return n(["Délai d'exécution du code Javascript"])}}},"trigger-event":{name:e=>{const{normalize:n}=e;return n(["Événement déclencheur"])},description:e=>{const{normalize:n}=e;return n([])},selectEvent:e=>{const{normalize:n}=e;return n(["Sélectionnez un événement"])}},conditions:{name:e=>{const{normalize:n}=e;return n(["Conditions"])},add:e=>{const{normalize:n}=e;return n(["Ajouter une condition"])},retryConditions:e=>{const{normalize:n}=e;return n(["Réessayer si aucune condition n'est remplie"])},description:e=>{const{normalize:n}=e;return n(["Bloc conditionnel"])},refresh:e=>{const{normalize:n}=e;return n(["Rafraichir les connections des conditions"])},fallbackTitle:e=>{const{normalize:n}=e;return n(["Exécuté lorsque toutes les comparaisons ne répondent pas aux exigences"])},equals:e=>{const{normalize:n}=e;return n(["Égale à"])},gt:e=>{const{normalize:n}=e;return n(["Plus grand que"])},gte:e=>{const{normalize:n}=e;return n(["Plus grand que ou égal"])},lt:e=>{const{normalize:n}=e;return n(["Moins que"])},lte:e=>{const{normalize:n}=e;return n(["Moins que ou égal"])},ne:e=>{const{normalize:n}=e;return n(["Différent"])},contains:e=>{const{normalize:n}=e;return n(["Contient"])}},"element-exists":{name:e=>{const{normalize:n}=e;return n(["L'élément existe"])},description:e=>{const{normalize:n}=e;return n(["Vérifie si un élément existe"])},selector:e=>{const{normalize:n}=e;return n(["Sélecteur d'éléments"])},fallbackTitle:e=>{const{normalize:n}=e;return n(["Exécuté lorsque l'élément n'existe pas"])},throwError:e=>{const{normalize:n}=e;return n(["Activer une erreur si n'existe pas"])},tryFor:{title:e=>{const{normalize:n}=e;return n(["Essaye de vérifier si l'élément existe"])},label:e=>{const{normalize:n}=e;return n(["Nombre d'essai"])}},timeout:{label:e=>{const{normalize:n}=e;return n(["Délai d'attente (millisecondes)"])},title:e=>{const{normalize:n}=e;return n(["Délai d'attente pour chaque essai"])}}},webhook:{name:e=>{const{normalize:n}=e;return n(["Requête HTTP"])},description:e=>{const{normalize:n}=e;return n(["Faire une requête HTTP"])},contentType:e=>{const{normalize:n}=e;return n(["Type de contenu"])},method:e=>{const{normalize:n}=e;return n(["Méthode de la requête"])},url:e=>{const{normalize:n}=e;return n(["URL de la requête"])},fallback:e=>{const{normalize:n}=e;return n(["Exécuter en cas d'échec ou d'erreur lors de la création de la requête HTTP"])},buttons:{header:e=>{const{normalize:n}=e;return n(["Ajouter un en-tête"])}},timeout:{placeholder:e=>{const{normalize:n}=e;return n(["Délai d'exécution"])},title:e=>{const{normalize:n}=e;return n(["Délai d'exécution de la requête HTTP (ms)"])}},tabs:{headers:e=>{const{normalize:n}=e;return n(["En-têtes"])},body:e=>{const{normalize:n}=e;return n(["Corps"])},response:e=>{const{normalize:n}=e;return n(["Réponse"])}}},"while-loop":{name:e=>{const{normalize:n}=e;return n(["Boucle Tant que"])},description:e=>{const{normalize:n}=e;return n(["Exécute les blocs tant que la condition est remplie"])},editCondition:e=>{const{normalize:n}=e;return n(["Modifier les conditions"])},fallback:e=>{const{normalize:n}=e;return n(["S'éxécute quand la condition n'est pas remplie"])}},"loop-elements":{name:e=>{const{normalize:n}=e;return n(["Boucle d'éléments"])},description:e=>{const{normalize:n}=e;return n(["Itérer entre chaque éléMent"])},loadMore:e=>{const{normalize:n}=e;return n(["Charger d'autres éléments"])},scrollToBottom:e=>{const{normalize:n}=e;return n(["Scroller jusqu'en bas de page"])},scrollToTop:e=>{const{normalize:n}=e;return n(["Scroller jusqu'en haut de page"])},actions:{none:e=>{const{normalize:n}=e;return n(["Aucune"])},"click-element":e=>{const{normalize:n}=e;return n(["Cliquer sur un élément"])},scroll:e=>{const{normalize:n}=e;return n(["Scroller vers la bas"])},"click-link":e=>{const{normalize:n}=e;return n(["Cliquer sur un lien"])},"scroll-up":e=>{const{normalize:n}=e;return n(["Scroller vers le haut"])}}},"loop-data":{name:e=>{const{normalize:n}=e;return n(["Boucle de données"])},description:e=>{const{normalize:n}=e;return n(["Itérer depuis les colonnes de données ou vos données personnalisées"])},loopId:e=>{const{normalize:n}=e;return n(["ID de la boucle"])},refKey:e=>{const{normalize:n}=e;return n(["Clé de référence"])},startIndex:e=>{const{normalize:n}=e;return n(["Commencer à partir de l'index"])},resumeLastWorkflow:e=>{const{normalize:n}=e;return n(["Reprendre la où la dernière éxecution s'est arrêté"])},modal:{fileTooLarge:e=>{const{normalize:n}=e;return n(["Fichier trop volumineux pour être modifié"])},maxFile:e=>{const{normalize:n}=e;return n(["La taille maximale du fichier est de 1 Mo"])},options:{firstRow:e=>{const{normalize:n}=e;return n(["Utiliser la première ligne comme clé"])}}},buttons:{clear:e=>{const{normalize:n}=e;return n(["Effacer les données"])},insert:e=>{const{normalize:n}=e;return n(["Insérer des données"])},import:e=>{const{normalize:n}=e;return n(["Importer un fichier"])}},maxLoop:{title:e=>{const{normalize:n}=e;return n(["Nombre maximum d'itérations de la boucle"])},label:e=>{const{normalize:n}=e;return n(["Nombre maximum d'itérations (0 pour désactiver)"])}},loopThrough:{placeholder:e=>{const{normalize:n}=e;return n(["Boucler depuis"])},fromNumber:e=>{const{normalize:n}=e;return n(["Depuis le nombre"])},toNumber:e=>{const{normalize:n}=e;return n(["Vers le nombre"])},options:{numbers:e=>{const{normalize:n}=e;return n(["Nombres"])},variable:e=>{const{normalize:n}=e;return n(["Variable"])},"data-columns":e=>{const{normalize:n}=e;return n(["Table"])},table:e=>{const{normalize:n}=e;return n(["Table"])},"custom-data":e=>{const{normalize:n}=e;return n(["Données personnalisées"])},"google-sheets":e=>{const{normalize:n}=e;return n(["Google sheets"])},elements:e=>{const{normalize:n}=e;return n(["Elements"])}}}},"loop-breakpoint":{name:e=>{const{normalize:n}=e;return n(["Point d'arrêt de la boucle"])},description:e=>{const{normalize:n}=e;return n(["Pour dire où la boucle doit s'arrêter"])}},"take-screenshot":{name:e=>{const{normalize:n}=e;return n(["Prendre une capture d'écran"])},fullPage:e=>{const{normalize:n}=e;return n(["Prendre une capture d'écran pleine page"])},description:e=>{const{normalize:n}=e;return n(["Prend une capture d'écran de l'onglet actif"])},imageQuality:e=>{const{normalize:n}=e;return n(["Qualité de l'image"])},saveToColumn:e=>{const{normalize:n}=e;return n(["Insérer une capture d'écran dans la Table"])},saveToComputer:e=>{const{normalize:n}=e;return n(["Enregistrer la capture d'écran sur l'ordinateur"])},types:{title:e=>{const{normalize:n}=e;return n(["Prende une capture d'écran"])},page:e=>{const{normalize:n}=e;return n(["D'une page"])},fullpage:e=>{const{normalize:n}=e;return n(["D'une page entière"])},element:e=>{const{normalize:n}=e;return n(["D'un élément"])}}},"switch-to":{name:e=>{const{normalize:n}=e;return n(["Basculer de cadre"])},description:e=>{const{normalize:n}=e;return n(["Basculer entre la fenêtre principale et l'iframe"])},iframeSelector:e=>{const{normalize:n}=e;return n(["Sélecteur de l'élément iframe"])},windowTypes:{main:e=>{const{normalize:n}=e;return n(["Fenêtre principale"])},iframe:e=>{const{normalize:n}=e;return n(["Iframe"])}}}}}}}}]);