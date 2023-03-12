"use strict";(self.webpackChunkautoma=self.webpackChunkautoma||[]).push([[325],{59870:(e,r,n)=>{n.r(r),n.d(r,{default:()=>o});const o={home:{viewAll:e=>{const{normalize:r}=e;return r(["Voir tout"])}},welcome:{title:e=>{const{normalize:r}=e;return r(["Bienvenue sur Automa! 🎉"])},text:e=>{const{normalize:r}=e;return r(["Commencez par lire la documentation ou parcourez workflows dans Automa Marketplace."])},marketplace:e=>{const{normalize:r}=e;return r(["Marketplace"])}},updateMessage:{text1:e=>{const{normalize:r,interpolate:n,named:o}=e;return r(["Automa a été mis à jour vers v",n(o("version")),","])},text2:e=>{const{normalize:r}=e;return r(["Regardez ce qu'il y a de nouveau."])}},auth:{title:e=>{const{normalize:r}=e;return r(["Authentification"])},signIn:e=>{const{normalize:r}=e;return r(["S'identifier"])},username:e=>{const{normalize:r}=e;return r(["Vous devez d'abord définir votre nom d'utilisateur"])},clickHere:e=>{const{normalize:r}=e;return r(["Cliquez ici"])},text:e=>{const{normalize:r}=e;return r(["Vous devez être connecté avant de pouvoir le faire"])}},settings:{theme:e=>{const{normalize:r}=e;return r(["Thème"])},shortcuts:{duplicate:e=>{const{normalize:r,interpolate:n,named:o}=e;return r(['Raccourci déjà utilisé par "',n(o("name")),'"'])}},language:{label:e=>{const{normalize:r}=e;return r(["Langue"])},helpTranslate:e=>{const{normalize:r}=e;return r(["Vous ne trouvez pas votre langue ? Aider à traduire."])},reloadPage:e=>{const{normalize:r}=e;return r(["Recharger la page pour appliquer"])}},menu:{backup:e=>{const{normalize:r}=e;return r(["Sauvegarder les Workflows"])},general:e=>{const{normalize:r}=e;return r(["Général"])},shortcuts:e=>{const{normalize:r}=e;return r(["Raccourcis"])},about:e=>{const{normalize:r}=e;return r(["À propos"])}},backupWorkflows:{title:e=>{const{normalize:r}=e;return r(["Sauvegarde locale"])},invalidPassword:e=>{const{normalize:r}=e;return r(["Mot de passe incorrect"])},workflowsAdded:e=>{const{normalize:r,interpolate:n,named:o}=e;return r([n(o("count"))," workflows ont été ajoutés"])},name:e=>{const{normalize:r}=e;return r(["Sauvegarder les Workflows"])},backup:{button:e=>{const{normalize:r}=e;return r(["Sauvegarde"])},encrypt:e=>{const{normalize:r}=e;return r(["Chiffrer avec mot de passe"])}},restore:{title:e=>{const{normalize:r}=e;return r(["Restaurer les workflows"])},button:e=>{const{normalize:r}=e;return r(["Restaurer"])},update:e=>{const{normalize:r}=e;return r(["Mettre à jour si le workflow existe"])}},cloud:{buttons:{local:e=>{const{normalize:r}=e;return r(["Locale"])},cloud:e=>{const{normalize:r}=e;return r(["Cloud"])}},delete:e=>{const{normalize:r}=e;return r(["Supprimer la sauvegarde"])},title:e=>{const{normalize:r}=e;return r(["Enregistrer sur le cloud"])},sync:e=>{const{normalize:r}=e;return r(["Synchroniser"])},lastSync:e=>{const{normalize:r}=e;return r(["Dernière synchronisation"])},lastBackup:e=>{const{normalize:r}=e;return r(["Dernière sauvegarde"])},select:e=>{const{normalize:r}=e;return r(["Sélectionnez les workflows"])},storedWorkflows:e=>{const{normalize:r}=e;return r(["Workflows stockés dans le cloud"])},selected:e=>{const{normalize:r}=e;return r(["Sélectionné"])},selectText:e=>{const{normalize:r}=e;return r(["Sélectionnez les workflows que vous souhaitez sauvegarder"])},selectAll:e=>{const{normalize:r}=e;return r(["Tout sélectionner"])},deselectAll:e=>{const{normalize:r}=e;return r(["Tout déselectionner"])},needSelectWorkflow:e=>{const{normalize:r}=e;return r(["Vous devez sélectionner les workflows que vous souhaitez sauvegarder"])}}}},workflow:{import:e=>{const{normalize:r}=e;return r(["Importer un workflow"])},new:e=>{const{normalize:r}=e;return r(["Nouveau workflow"])},delete:e=>{const{normalize:r}=e;return r(["Supprimer le workflow"])},browse:e=>{const{normalize:r}=e;return r(["Parcourir les workflows"])},name:e=>{const{normalize:r}=e;return r(["Nom du workflow"])},rename:e=>{const{normalize:r}=e;return r(["Renommer le workflow"])},add:e=>{const{normalize:r}=e;return r(["Ajouter un workflow"])},clickToEnable:e=>{const{normalize:r}=e;return r(["Cliquer pour activer"])},toggleSidebar:e=>{const{normalize:r}=e;return r(["Afficher/Cacher la barre latérale"])},cantEdit:e=>{const{normalize:r}=e;return r(["Impossible de modifier le workflow partagé"])},host:{title:e=>{const{normalize:r}=e;return r(["Workflow hôte"])},set:e=>{const{normalize:r}=e;return r(["Définir comme workflow hôte"])},id:e=>{const{normalize:r}=e;return r(["Identifiant de l'hôte"])},add:e=>{const{normalize:r}=e;return r(["Ajouter un workflow hébergé"])},sync:{title:e=>{const{normalize:r}=e;return r(["Synchroniser"])},description:e=>{const{normalize:r}=e;return r(["Synchronisation avec le workflow de l'hôte"])}},messages:{hostExist:e=>{const{normalize:r}=e;return r(["Vous avez déjà ajouté cet hôte"])},notFound:e=>{const{normalize:r,interpolate:n,named:o}=e;return r(["Impossible de trouver le workflow hébergé avec l'identifiant \"",n(o("id")),'"'])}}},type:{local:e=>{const{normalize:r}=e;return r(["Locale"])},shared:e=>{const{normalize:r}=e;return r(["Partagé"])},host:e=>{const{normalize:r}=e;return r(["Hébergé"])}},unpublish:{title:e=>{const{normalize:r}=e;return r(["Annuler la publication du workflow"])},button:e=>{const{normalize:r}=e;return r(["Annuler la publication"])},body:e=>{const{normalize:r,interpolate:n,named:o}=e;return r(['Voulez-vous vraiment annuler la publication du workflow "',n(o("name")),'" ?'])}},share:{url:e=>{const{normalize:r}=e;return r(["Partager l'URL"])},publish:e=>{const{normalize:r}=e;return r(["Publier"])},sharedAs:e=>{const{normalize:r,interpolate:n,named:o}=e;return r(['Partagé en tant que "',n(o("name")),'"'])},title:e=>{const{normalize:r}=e;return r(["Partager le workflow"])},download:e=>{const{normalize:r}=e;return r(["Télécharger le workflow"])},edit:e=>{const{normalize:r}=e;return r(["Éditer la description"])},fetchLocal:e=>{const{normalize:r}=e;return r(["Récupérer le workflow local"])},update:e=>{const{normalize:r}=e;return r(["Mettre à jour"])},unpublish:e=>{const{normalize:r}=e;return r(["Annuler la publication"])}},variables:{title:e=>{const{normalize:r,plural:n}=e;return n([r(["Variable"]),r(["Variables"])])},name:e=>{const{normalize:r}=e;return r(["Nom de la variable"])},assign:e=>{const{normalize:r}=e;return r(["Attribuer à la variablee"])}},protect:{title:e=>{const{normalize:r}=e;return r(["Protéger le workflow"])},remove:e=>{const{normalize:r}=e;return r(["Supprimer la protection"])},button:e=>{const{normalize:r}=e;return r(["Protéger"])},note:e=>{const{normalize:r}=e;return r(["Remarque : vous devez vous souvenir de ce mot de passe, ce mot de passe vous sera demandé pour modifier et supprimer le workflow ultérieurement."])}},locked:{title:e=>{const{normalize:r}=e;return r(["Ce Workflow est protégé"])},body:e=>{const{normalize:r}=e;return r(["Entrez le mot de passe pour le déverrouiller"])},unlock:e=>{const{normalize:r}=e;return r(["Déverrouiller"])},messages:{"incorrect-password":e=>{const{normalize:r}=e;return r(["Mot de passe incorrect"])}}},state:{executeBy:e=>{const{normalize:r,interpolate:n,named:o}=e;return r(['Exécuté par: "',n(o("name")),'"'])}},dataColumns:{title:e=>{const{normalize:r}=e;return r(["Tableau"])},placeholder:e=>{const{normalize:r}=e;return r(["Rechercher ou ajouter une colonne"])},select:e=>{const{normalize:r}=e;return r(["Sélectionner une colonne"])},column:{name:e=>{const{normalize:r}=e;return r(["Nom de la colonne"])},type:e=>{const{normalize:r}=e;return r(["Type de donnée"])}}},sidebar:{workflowIcon:e=>{const{normalize:r}=e;return r(["Icône du workflow"])}},editor:{zoomIn:e=>{const{normalize:r}=e;return r(["Agrandir"])},zoomOut:e=>{const{normalize:r}=e;return r(["Réduire"])},resetZoom:e=>{const{normalize:r}=e;return r(["Réinitialiser le zoom"])},duplicate:e=>{const{normalize:r}=e;return r(["Dupliquer"])}},settings:{saveLog:e=>{const{normalize:r}=e;return r(["Enregistrer les logs du workflow"])},executedBlockOnWeb:e=>{const{normalize:r}=e;return r(["Afficher le bloc exécuté sur la page Web"])},debugMode:{title:e=>{const{normalize:r}=e;return r(["Mode debug"])},description:e=>{const{normalize:r}=e;return r(["Exécutez le workflow à l'aide du protocole Chrome DevTools."])}},restartWorkflow:{for:e=>{const{normalize:r}=e;return r(["Redémarrer pour"])},times:e=>{const{normalize:r}=e;return r(["Fois"])}},onError:{title:e=>{const{normalize:r}=e;return r(["Lors d'une erreur du workflow"])},items:{keepRunning:e=>{const{normalize:r}=e;return r(["Continuer"])},stopWorkflow:e=>{const{normalize:r}=e;return r(["Arrêter le workflow"])},restartWorkflow:e=>{const{normalize:r}=e;return r(["Redémarrer le workflow"])}}},timeout:{title:e=>{const{normalize:r}=e;return r(["Délai d'expiration du workflow (millisecondes)"])}},blockDelay:{title:e=>{const{normalize:r}=e;return r(["Délai du bloc (millisecondes)"])},description:e=>{const{normalize:r}=e;return r(["Ajouter un délai avant d'exécuter chacun des blocs"])}}}},collection:{description:e=>{const{normalize:r}=e;return r(["Exécutez vos workflows en séquence"])},new:e=>{const{normalize:r}=e;return r(["Nouvelle collection"])},delete:e=>{const{normalize:r}=e;return r(["Supprimer la collection"])},add:e=>{const{normalize:r}=e;return r(["Ajouter une collection"])},rename:e=>{const{normalize:r}=e;return r(["Renommer la collection"])},flow:e=>{const{normalize:r}=e;return r(["Flow"])},dragDropText:e=>{const{normalize:r}=e;return r(["Déposez un workflow ou un bloc ici"])},options:{atOnce:{title:e=>{const{normalize:r}=e;return r(["Exécuter tous les workflows de la collection en même temps"])},description:e=>{const{normalize:r}=e;return r(["Le bloc ne sera pas exécuté lors de l'utilisation de cette option"])}}},globalData:{note:e=>{const{normalize:r}=e;return r(["Cela écrasera les données globales du workflow"])}}},log:{goBack:e=>{const{normalize:r,interpolate:n,named:o}=e;return r(['Revenir aux logs de "',n(o("name")),'"'])},startedDate:e=>{const{normalize:r}=e;return r(["Date de début"])},duration:e=>{const{normalize:r}=e;return r(["Durée"])},selectAll:e=>{const{normalize:r}=e;return r(["Tout sélectionner"])},deselectAll:e=>{const{normalize:r}=e;return r(["Tout déselectionner"])},deleteSelected:e=>{const{normalize:r}=e;return r(["Supprimer les logs sélectionnés"])},clearLogs:{title:e=>{const{normalize:r}=e;return r(["Effacer les logs"])},description:e=>{const{normalize:r}=e;return r(["Êtes-vous sûr de vouloir effacer tous les logs?"])}},types:{stop:e=>{const{normalize:r}=e;return r(["Le workflow est arrêté"])},finish:e=>{const{normalize:r}=e;return r(["Finir"])}},messages:{"url-empty":e=>{const{normalize:r}=e;return r(["L'URL est vide"])},"invalid-url":e=>{const{normalize:r}=e;return r(["L'URL n'est pas valide"])},"conditions-empty":e=>{const{normalize:r}=e;return r(["Les conditions sont vides"])},"invalid-proxy-host":e=>{const{normalize:r}=e;return r(["Hôte proxy non valide"])},"workflow-disabled":e=>{const{normalize:r}=e;return r(["Le workflow est désactivé"])},"selector-empty":e=>{const{normalize:r}=e;return r(["Le sélecteur d'élément est vide"])},"invalid-body":e=>{const{normalize:r}=e;return r(["Le corps du contenu n'est pas en JSON valide"])},"invalid-active-tab":e=>{const{normalize:r,interpolate:n,named:o}=e;return r(['"',n(o("url")),'" est une URL invalide'])},"empty-spreadsheet-id":e=>{const{normalize:r}=e;return r(["L'Id de la feuille de calcul est vide"])},"invalid-loop-data":e=>{const{normalize:r}=e;return r(["Données non valides à parcourir"])},"empty-workflow":e=>{const{normalize:r}=e;return r(["Vous devez d'abord sélectionner workflow"])},"active-tab-removed":e=>{const{normalize:r}=e;return r(["L'onglet actif du workflow est supprimé"])},"empty-spreadsheet-range":e=>{const{normalize:r}=e;return r(["La plage de la feuille de calcul est vide"])},"stop-timeout":e=>{const{normalize:r}=e;return r(["Le workflow est arrêté en raison du délai d'attente"])},"no-file-access":e=>{const{normalize:r}=e;return r(["Automa n'a pas accès au fichier"])},"no-workflow":e=>{const{normalize:r,interpolate:n,named:o}=e;return r(["Impossible de trouver le workflow avec l'ID \"",n(o("workflowId")),'"'])},"no-match-tab":e=>{const{normalize:r,interpolate:n,named:o}=e;return r(['Impossible de trouver un onglet avec les motifs "',n(o("pattern")),'"'])},"no-clipboard-acces":e=>{const{normalize:r}=e;return r(["Vous n'êtes pas autorisé à accéder au presse-papiers"])},"element-not-found":e=>{const{normalize:r,interpolate:n,named:o}=e;return r(['Impossible de trouver un élément avec le sélecteur "',n(o("selector")),'".'])},"not-iframe":e=>{const{normalize:r,interpolate:n,named:o}=e;return r(["L'élément avec le sélecteur \"",n(o("selector")),"\" n'est pas un élément Iframe"])},"iframe-not-found":e=>{const{normalize:r,interpolate:n,named:o}=e;return r(['Impossible de trouver un élément Iframe avec le sélecteur "',n(o("selector")),'".'])},"workflow-infinite-loop":e=>{const{normalize:r}=e;return r(["Impossible d'exécuter le workflow pour éviter une boucle infinie"])},"not-debug-mode":e=>{const{normalize:r}=e;return r(["Le workflow doit s'exécuter en mode débogage pour que ce bloc fonctionne correctement"])},"no-iframe-id":e=>{const{normalize:r,interpolate:n,named:o}=e;return r(["Impossible de trouver l'ID de Frame pour l'élément iframe avec le sélecteur \"",n(o("selector")),'"'])},"no-tab":e=>{const{normalize:r,interpolate:n,named:o}=e;return r(['Impossible de se connecter à un onglet, utilisez le bloc "Nouvel onglet" ou "Onglet actif" avant d\'utiliser le bloc "',n(o("name")),'".'])}},description:{text:e=>{const{normalize:r,interpolate:n,named:o}=e;return r([n(o("status"))," le ",n(o("date"))," en ",n(o("duration"))])},status:{success:e=>{const{normalize:r}=e;return r(["Réussi"])},error:e=>{const{normalize:r}=e;return r(["Échoué"])},stopped:e=>{const{normalize:r}=e;return r(["Arrêté"])}}},delete:{title:e=>{const{normalize:r}=e;return r(["Supprimer le log"])},description:e=>{const{normalize:r}=e;return r(["Voulez-vous vraiment supprimer tous les logs sélectionnés ?"])}},exportData:{title:e=>{const{normalize:r}=e;return r(["Exporter les données"])},types:{json:e=>{const{normalize:r}=e;return r(["JSON"])},csv:e=>{const{normalize:r}=e;return r(["CSV"])},"plain-text":e=>{const{normalize:r}=e;return r(["Texte brut"])}}},filter:{title:e=>{const{normalize:r}=e;return r(["Filtrer"])},byStatus:e=>{const{normalize:r}=e;return r(["Par statut"])},byDate:{title:e=>{const{normalize:r}=e;return r(["Par date"])},items:{lastDay:e=>{const{normalize:r}=e;return r(["Hier"])},last7Days:e=>{const{normalize:r}=e;return r(["La semaine dernière"])},last30Days:e=>{const{normalize:r}=e;return r(["Le mois dernier"])}}}}},components:{pagination:{text1:e=>{const{normalize:r}=e;return r(["Afficher"])},text2:e=>{const{normalize:r,interpolate:n,named:o}=e;return r(["Éléments sur ",n(o("count"))])},nextPage:e=>{const{normalize:r}=e;return r(["Page suivante"])},currentPage:e=>{const{normalize:r}=e;return r(["Page actuelle"])},prevPage:e=>{const{normalize:r}=e;return r(["Page précédente"])},of:e=>{const{normalize:r,interpolate:n,named:o}=e;return r(["sur ",n(o("page"))])}}}}}}]);