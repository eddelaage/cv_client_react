import React from 'react'

import './Hanalytics.css'

const Hanalytics = () => {
  return (
    <div className="container-hanalytics">
      <div className="container-title-hanalytics">
        <div>
          <p>Septembre 2018 - Janvier 2019</p>
          <h2 className="hanalytics-title">Stage developpeur web chez <a className="link-hanalytics" href="http://hanalytics.co/">www.hanalytics.co</a></h2>
          <h3>Javascript / node js / react / redux / locomotive js / mongo db / Electron / Bootstrap</h3>
        </div>
        <div>
          <p>
            Hanalytics est un service de surveillance de la performance des applications (APM) dédié aux systèmes SAP.
          </p>
          <p>
            Il fournit aux équipes informatiques SAP un cockpit centralisé pour obtenir une vue claire de l'état des systèmes SAP.
          </p>
          <p>Il réduit le temps requis pour surveiller les activités quotidiennes, aidant ainsi les équipes à se concentrer sur les processus d'amélioration continue.</p>
        </div>
      </div>
      <div className="container-recap-hanalytics">
        <h4>L'application web Hanalytics</h4>
        <p>L’application est développée sur la base d’un framework web pour Node http://www.locomotivejs.org/ pour obtenir une structure MVC puis sur chacune des pages viennent se greffer des composants react / redux. La base de données utilisée est MongoDB</p>
        <ul className="ul-hanalytics">
          <li>
            Intégration de la bibliothèque Isotop : https://isotope.metafizzy.co/
            Isotope.js est une bibliothèque JavaScript qui facilite le tri, le filtrage et l'ajout de dispositions maçonnerie aux éléments d'une page Web.
          </li>
          <li>Mise en place d'un système de rafraichissement toutes les X secondes</li>
          <li>Création de la page de gestion des systèmes :</li>
          <ul>
            <li>Liste de tous les systèmes avec la possibilité d’activer / désactiver les différents systèmes.</li>
            <li>Ajout de nouveaux systèmes</li>
            <li>Ajout de nouveaux cloud provider</li>
            <li>Linker des systèmes avec des cloud provider.</li>
          </ul>
          <li>Création de la page de gestion des cloud provider</li>
        </ul>
      </div>
      <div className="container-recap-hanalytics">
        <h4>Electron : Hanalytics lite</h4>
        <p>Cette application est une version desktop à télécharger pour permettre aux prospects de tester l’application.</p>
        <p>Elle permet de créer des systèmes pour ensuite lancer un certain nombre d’enregistrements des données à des périodes différentes pour enfin pouvoir les analyser et donc avoir un aperçu des services d’Hanalytics.</p>
        <ul className="ul-hanalytics">
          <li>Création de la page d’accueil qui liste les systèmes créés avec une synthèse des actions sur chacun d’eux.</li>
          <li>Création de progress bar au chargement des pages</li>
          <li>Création de pages de connexion pour accéder aux différents systèmes</li>
          <li>Création du système de lancement et d’arrêt d’un enregistrement</li>
          <li>Création de progress bar en fonction du temps d’enregistrement écoulé</li>
          <li>Création de la liste des enregistrements effectués.</li>
        </ul>
      </div>
      <div className="container-recap-hanalytics">
        <h4>Développement du site internet corporate http://hanalytics.co/</h4>
        <p>L'objectif était de créer le site Internet corporate de l'application.</p>
        <p>Nous sommes partis sur la base d'un template trouvé sur Internet</p>
        <p>Il a fallu l'adapter à la charte graphique de l'entreprise et intégrer les logos / images et textes</p>
      </div>
    </div>
  )
}

export default Hanalytics
