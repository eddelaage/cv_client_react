import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

import Footer from './Footer'
import EndFooter from './EndFooter'

import ImageGallery from 'react-image-gallery';

import './HanalyticsDetail.css'

import '../../node_modules/react-image-gallery/styles/css/image-gallery.css';

import Nav from './Nav'

import Corporate1 from '../img/Hanalytics/Corporate/1.png'
import CorporateLitle1 from '../img/Hanalytics/Corporate/Litle/1.png'
import Corporate2 from '../img/Hanalytics/Corporate/2.png'
import CorporateLitle2 from '../img/Hanalytics/Corporate/Litle/2.png'
import Corporate3 from '../img/Hanalytics/Corporate/3.png'
import CorporateLitle3 from '../img/Hanalytics/Corporate/Litle/3.png'
import Corporate4 from '../img/Hanalytics/Corporate/4.png'
import CorporateLitle4 from '../img/Hanalytics/Corporate/Litle/4.png'
import Corporate5 from '../img/Hanalytics/Corporate/5.png'
import CorporateLitle5 from '../img/Hanalytics/Corporate/Litle/5.png'

const images = [
  {
    original: Corporate1,
    thumbnail: CorporateLitle1
  },
  {
    original: Corporate2,
    thumbnail: CorporateLitle2
  },
  {
    original: Corporate3,
    thumbnail: CorporateLitle3
  },
  {
    original: Corporate4,
    thumbnail: CorporateLitle4
  },
  {
    original: Corporate5,
    thumbnail: CorporateLitle5
  }
]

const HanalyticsCorporate = () => {
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
        <h2>Hanalytics Site Corporate </h2>
      </div>
      <div className="container-presentation">
        <div className="container-imgaeGallery">
          <ImageGallery items={images} autoPlay />
        </div>
        <div className="hanalytics-electron-detail">
          <h3>Stage developpeur web chez www.hanalytics.co</h3>
          <p>Hanaylics est une application visant a fournir aux équipes informatiques SAP un cockpit centralisé pour obtenir une vue claire de l'état des systèmes SAP.</p>
          <p>Développement du site internet corporate http://hanalytics.co/</p>
          <p>L'objectif était de créer le site Internet corporate de l'application.</p>
          <p>Nous sommes partis sur la base d'un template trouvé sur Internet</p>
          <p>Il a fallu l'adapter à la charte graphique de l'entreprise et intégrer les logos / images et textes</p>
          <p className="back-home"><Link to='/#portofolio'>Retour</Link></p>
        </div>
      </div>
      <Footer />
      <EndFooter />
    </div>
  )
}

export default HanalyticsCorporate
