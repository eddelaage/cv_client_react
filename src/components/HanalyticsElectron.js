import React from 'react'

import ImageGallery from 'react-image-gallery';

import './HanalyticsElectron.css'

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
      <div className="hanalytics-electron-title">
        <h2>Hanalytics Lite avec Electron </h2>
      </div>
      <div className="container-imgaeGallery">
        <ImageGallery items={images} />
      </div>
      <div className="hanalytics-electron-detail">
        <div className="images">
          {/* <img src={Elctron1} />
            <img src={Elctron5} />
            <img src={Elctron8} /> */}
        </div>
      </div>
    </div>
  )
}

export default HanalyticsElectron
