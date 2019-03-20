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
        {/* <p>Au total et en 5 mois j’aurais créé 3 projets concrets avec l’aide d’un logiciel de version (Git)</p>
        <p>Outre l’apprentissage de ces technologies, nous travaillons en groupe de 5 à 6 personnes.</p>
        <p>J’ai donc appris à travailler avec une approche Agile et une méthodologie SCRUM :</p> */}
        <ul>
          <li>Création de compte / connexion déconnexion (Passport JWT) / mot de passe oublié.</li>
          <li>Tableau récapitulatif des gibiers / suppression modification d’un gibier.</li>
          <li>Mise en place de “cards Bootstrap” pour les statistiques.</li>
          <li>Mise en place de filtres (Utilisation de Reselect pour les données dérivées de redux)</li>
          <li>Mise en place de différents graphiques avec ChartJS.</li>
          <li>Application en cours de développement. D’autres fonctionnalités à venir...</li>
        </ul>
      </div>
    </div>
  )
}

export default MyHuntingBoard
