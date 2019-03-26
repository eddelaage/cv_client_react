import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

import ImageGallery from 'react-image-gallery';

import './HanalyticsDetail.css'

import '../../node_modules/react-image-gallery/styles/css/image-gallery.css';

import Nav from './Nav'

import MyHuntingBoard1 from '../img/MyHuntingBoard/1.png'
import MyHuntingBoardLitle1 from '../img/MyHuntingBoard/Litle/1.png'
import MyHuntingBoard2 from '../img/MyHuntingBoard/2.png'
import MyHuntingBoardLitle2 from '../img/MyHuntingBoard/Litle/2.png'
import MyHuntingBoard3 from '../img/MyHuntingBoard/3.png'
import MyHuntingBoardLitle3 from '../img/MyHuntingBoard/Litle/3.png'
import MyHuntingBoard4 from '../img/MyHuntingBoard/4.png'
import MyHuntingBoardLitle4 from '../img/MyHuntingBoard/Litle/4.png'
import MyHuntingBoard5 from '../img/MyHuntingBoard/5.png'
import MyHuntingBoardLitle5 from '../img/MyHuntingBoard/Litle/5.png'
import Footer from './Footer';
import EndFooter from './EndFooter';

const images = [
  {
    original: MyHuntingBoard1,
    thumbnail: MyHuntingBoardLitle1
  },
  {
    original: MyHuntingBoard2,
    thumbnail: MyHuntingBoardLitle2
  },
  {
    original: MyHuntingBoard3,
    thumbnail: MyHuntingBoardLitle3
  },
  {
    original: MyHuntingBoard4,
    thumbnail: MyHuntingBoardLitle4
  },
  {
    original: MyHuntingBoard5,
    thumbnail: MyHuntingBoardLitle5
  }
]

const MyHuntingBoardDetail = () => {
  return (
    <div className="Header" id="Header">
      <div>
        <div className="background_img">
          <Nav />
        </div>
      </div>
      <div className="container-back">
        <p className="back-home"><Link to='/#portofolio'>Retour</Link></p>
      </div>
      <div className="hanalytics-electron-title">
        <h2>MyHuntingBoard <span>(Projet personnel en cours de développement...)</span></h2>
      </div>
      <div className="container-presentation">
        <div className="container-imgaeGallery">
          <ImageGallery items={images} />
        </div>
        <div className="hanalytics-electron-detail">
          <h3>Objectif : continué a me former et a apprendre a travers un réel projet d'application full statk. <br/> (React / Redux / Node / React router / MySQL / divers bibliothèques</h3>
          <p>MyHuntingBoard est une application “dashboards“ afin de permettre aux chasseurs une meilleurs gestion de leurs prélèvements de gibiers. </p>
          <p>Front : React / Redux <br/> Back : Node JS <br/> Base de données: Mysql</p>
          <p>Les fonctionnalitées : </p>
          <ul className="ul-hanalytics">
            <li>Création de compte / connexion déconnexion (Passport JWT) / mot de passe oublié.</li>
            <li>Tableau récapitulatif des gibiers / suppression modification d’un gibier.</li>
            <li>Mise en place de “cards Bootstrap” pour les statistiques.</li>
            <li>Mise en place de filtres (Utilisation de Reselect pour les données dérivées de redux)</li>
            <li>Upload Update Delete d'images des gibiers sur Cloudinary</li>
            <li>Application en court de développement. D’autres fonctionnalités à venir...</li>
          </ul>
          <p className="back-home"><Link to='/#portofolio'>Retour</Link></p>
        </div>
      </div>
      <Footer />
      <EndFooter />
    </div>
  )
}

export default MyHuntingBoardDetail
