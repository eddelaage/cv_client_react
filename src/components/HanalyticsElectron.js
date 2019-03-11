import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

import Footer from './Footer'
import EndFooter from './EndFooter'

import ImageGallery from 'react-image-gallery';

import './HanalyticsDetail.css'

import '../../node_modules/react-image-gallery/styles/css/image-gallery.css';

import Nav from './Nav'

import Elctron1 from '../img/Hanalytics/Electron/1.png'
import ElctronLitle1 from '../img/Hanalytics/Electron/Litle/1.png'
import Elctron2 from '../img/Hanalytics/Electron/2.png'
import ElctronLitle2 from '../img/Hanalytics/Electron/Litle/2.png'
import Elctron3 from '../img/Hanalytics/Electron/3.png'
import ElctronLitle3 from '../img/Hanalytics/Electron/Litle/3.png'
import Elctron4 from '../img/Hanalytics/Electron/4.png'
import ElctronLitle4 from '../img/Hanalytics/Electron/Litle/4.png'
import Elctron5 from '../img/Hanalytics/Electron/5.png'
import ElctronLitle5 from '../img/Hanalytics/Electron/Litle/5.png'
import Elctron6 from '../img/Hanalytics/Electron/6.png'
import ElctronLitle6 from '../img/Hanalytics/Electron/Litle/6.png'
import Elctron7 from '../img/Hanalytics/Electron/7.png'
import ElctronLitle7 from '../img/Hanalytics/Electron/Litle/7.png'
import Elctron8 from '../img/Hanalytics/Electron/8.png'
import ElctronLitle8 from '../img/Hanalytics/Electron/Litle/8.png'

const images = [
  {
    original: Elctron1,
    thumbnail: ElctronLitle1
  },
  {
    original: Elctron2,
    thumbnail: ElctronLitle2
  },
  {
    original: Elctron3,
    thumbnail: ElctronLitle3
  },
  {
    original: Elctron4,
    thumbnail: ElctronLitle4
  },
  {
    original: Elctron5,
    thumbnail: ElctronLitle5
  },
  {
    original: Elctron6,
    thumbnail: ElctronLitle6
  },
  {
    original: Elctron7,
    thumbnail: ElctronLitle7
  },
  {
    original: Elctron8,
    thumbnail: ElctronLitle8
  }
]

const HanalyticsElectron = () => {
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
        <h2>Hanalytics Lite avec Electron </h2>
      </div>
      <div className="container-presentation">
        <div className="container-imgaeGallery">
          <ImageGallery items={images} autoPlay />
        </div>
        <div className="hanalytics-electron-detail">
          <h3>Stage developpeur web chez www.hanalytics.co</h3>
          <p>Hanaylics est une application visant a fournir aux équipes informatiques SAP un cockpit centralisé pour obtenir une vue claire de l'état des systèmes SAP.</p>
          <p>L'application Electron est une version desktop à télécharger pour permettre aux prospects de tester l’application.</p>
          <p>Elle permet de créer des systèmes pour ensuite lancer un certain nombre d’enregistrements des données à des périodes différentes pour enfin pouvoir les analyser et donc avoir un aperçu des services d’Hanalytics.</p>
          <ul className="ul-hanalytics">
            <li>Création de la page d’accueil qui liste les systèmes créés avec une synthèse des actions sur chacun d’eux.</li>
            <li>Création de progress bar au chargement des pages</li>
            <li>Création de pages de connexion pour accéder aux différents systèmes</li>
            <li>Création du système de lancement et d’arrêt d’un enregistrement</li>
            <li>Création de progress bar en fonction du temps d’enregistrement écoulé</li>
            <li>Création de la liste des enregistrements effectués.</li>
          </ul>
          <p className="back-home"><Link to='/#portofolio'>Retour</Link></p>
        </div>
      </div>
      <Footer />
      <EndFooter />
    </div>
  )
}

export default HanalyticsElectron
