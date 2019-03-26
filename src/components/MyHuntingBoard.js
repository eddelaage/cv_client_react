import React from 'react'

import './MyHuntingBoard.css'

const MyHuntingBoard = () => {
  return (
    <div className="container-wild-code-shcoll">
      <div className="container-title-wcs">
        <div>
          <p>Depuis Février 2019</p>
          <h2 className="wcs-title">My Hunting Board (Projet personnel) </h2>
          <h3>React / Redux / Node JS / React router / MySQL / Bootstrap / divers bibliothèques</h3>
        </div>
        <div>
          <p>Développement full stack d’une application “dashboards“ afin de permettre aux chasseurs une meilleurs gestion de leurs prélèvements de gibiers.</p>
        </div>
      </div>
      <div className="container-recap-wcs">
        <p>Front avec React / Redux <br/> Back avec Node JS <br/> Base de données avec Mysql</p>
        <ul>
          <li>Création de compte / connexion déconnexion (Passport JWT) / mot de passe oublié.</li>
          <li>Tableau récapitulatif des gibiers / suppression modification d’un gibier.</li>
          <li>Mise en place de “cards Bootstrap” pour les statistiques.</li>
          <li>Mise en place de filtres (Utilisation de Reselect pour les données dérivées de redux)</li>
          <li>Mise en place de différents graphiques avec ChartJS.</li>
          <li>Upload Update Delete d'images des gibiers sur Cloudinary</li>
          <li>Application en cours de développement. D’autres fonctionnalités à venir...</li>
        </ul>
      </div>
    </div>
  )
}

export default MyHuntingBoard
