import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

import ImageGallery from 'react-image-gallery';

import './HanalyticsDetail.css'

import '../../node_modules/react-image-gallery/styles/css/image-gallery.css';

import Nav from './Nav'

import App1 from '../img/Hanalytics/App/1.png'
import AppLitle1 from '../img/Hanalytics/App/Litle/1.png'
import App2 from '../img/Hanalytics/App/2.png'
import AppLitle2 from '../img/Hanalytics/App/Litle/2.png'
import App3 from '../img/Hanalytics/App/3.png'
import AppLitle3 from '../img/Hanalytics/App/Litle/3.png'
import App4 from '../img/Hanalytics/App/4.png'
import AppLitle4 from '../img/Hanalytics/App/Litle/4.png'
import App5 from '../img/Hanalytics/App/5.png'
import AppLitle5 from '../img/Hanalytics/App/Litle/5.png'
import Footer from './Footer';
import EndFooter from './EndFooter';

const images = [
  {
    original: App1,
    thumbnail: AppLitle1
  },
  {
    original: App2,
    thumbnail: AppLitle2
  },
  {
    original: App3,
    thumbnail: AppLitle3
  },
  {
    original: App4,
    thumbnail: AppLitle4
  },
  {
    original: App5,
    thumbnail: AppLitle5
  }
]

const HanalyticsApp = () => {
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
        <h2>Hanalytics : l'appilcation web </h2>
      </div>
      <div className="container-presentation">
        <div className="container-imgaeGallery">
          <ImageGallery items={images} />
        </div>
        <div className="hanalytics-electron-detail">
          <h3>Stage developpeur web chez www.hanalytics.co</h3>
          <p>Hanaylics est une application visant a fournir aux équipes informatiques SAP un cockpit centralisé pour obtenir une vue claire de l'état des systèmes SAP.</p>
          <p>L’application est développée sur la base d’un framework web pour Node http://www.locomotivejs.org/ pour obtenir une structure MVC puis sur chacune des pages viennent se greffer des composants react / redux. La base de données utilisée est MongoDB</p>
          <ul className="ul-hanalytics">
            <li>
              Intégration de la bibliothèque Isotop : https://isotope.metafizzy.co/ <br/>
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
          <p className="back-home"><Link to='/#portofolio'>Retour</Link></p>
        </div>
      </div>
      <Footer />
      <EndFooter />
    </div>
  )
}

export default HanalyticsApp
