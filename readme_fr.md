[English](https://madnerdorg.github.io/libreinterface/)

![LibreInterface banner](doc/libreinterface.png)     
[Applications Arduino](http://madnerd.org/interface) / [Éditeur de code](http://madnerd.org/interface/editor) / [Télécharger](https://github.com/madnerdorg/libreinterface/archive/master.zip) 
# C'est quoi LibreInterface ?
LibreInterface est une application web pour créer des pages web statiques.
Vous pouvez l'utiliser pour créer des pages web local, des télécommandes / tableaux de bord pour des arduino (à l'aide des exemples fournis) et les partager en tant que fichier json. 




LibreInterface est rempli de bibliothèques , afin qu'ils puissent marcher même sans connexion internet.
* Semantic UI / Jquery (pour le design)
* WebMidi (contrôler du MIDI à l'aide d'un page web)
* Highlight/Code Mirror (afficher du code)
* Markdown-browser (Afficher du markdown)
* Highcharts (créer des graphiques)
* Reconnecting Websocket (Autoreconnexion pour les websockets)


# Applications
## Exemple pour libreConnect
Il y a des exemples pour mes [arduino](http://madnerdorg.github.io/libreconnect) 
![Screenshot of libreinterface](doc/libre_interface_demo.jpg)


## Coder une page web à l'aide d'un éditeur de texte
* Copier **blank.html** dans un nouveau fichier
```
blank.html --> homepage.html
```
* Ajouter votre code dans body


Vous pouvez apprendre à rajouter des éléments sur [semantic-ui.com](https://semantic-ui.com/)


## Coder votre page web à l'intérieur de votre navigateur
Vous pouvez aussi utiliser l'éditeur en ligne
Tous les changements seront sauvegardés **dans votre navigateur** à l'aide du localStorage, et peut être exportés/importés dans un fichier json
![Top Menu](doc/topmenu.png)
* Aller sur [madnerd.org/interface/editor.html](madnerd.org/interface/editor.html)
* Cliquer sur l'icône verte pour modifier le code à l'aide de codemirror 


* Le code sera injecté dans cette div, lorsque vous sauvez.
```
<div id="application" class="custom-code"></div>
```
![Éditeur de Code](doc/codeeditor.png)


Le code est sauvé à l'intérieur de localStorage dans votre navigateur, vous pouvez créer plusieurs pages en cliquant sur Add


Vous pouvez aussi partager votre code à l'aide des boutons upload/download. 
![Bottom Menu](doc/bottommenu.png)


L'éditeur fonctionne sur un smartphone/ une tablette sur Chrome/Firefox. 
Je recommande l'usage d'un clavier Bluetooth ou au moins de ce layout [Hacker's keyboard](https://play.google.com/store/apps/details?id=org.pocketworkstation.pckeyboard) 


> Vous pouvez utiliser la variable isComputer pour changer la façon dont une application se comporte selon que vous soyez devant un ordinateur ou un téléphone. 


# Licences
* Markdown-js : MIT (https://github.com/evilstreak/markdown-js)
* Code Mirror: MIT (https://codemirror.net/) 
* Semantic UI: MIT (https://semantic-ui.com/) 
* Highlight-JS: BSD 3 (https://highlightjs.org/) 
* Semantic-UI-Range: MIT (https://github.com/tyleryasaka/semantic-ui-range)
* Jquery: Apache v2 (http://jquery.com/) 



