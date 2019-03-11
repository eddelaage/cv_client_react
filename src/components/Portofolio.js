import React from 'react'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link'

import './Portofolio.css'

import Elctron1 from '../img/Hanalytics/Electron/Moyen/1.png'
import Elctron5 from '../img/Hanalytics/Electron/Moyen/5.png'
import Elctron8 from '../img/Hanalytics/Electron/Moyen/8.png'
import Application1 from '../img/Hanalytics/App/Moyen/1.png'
import Application2 from '../img/Hanalytics/App/Moyen/2.png'
import Application3 from '../img/Hanalytics/App/Moyen/3.png'
import Coroporate1 from '../img/Hanalytics/Corporate/Moyen/1.png'
import Coroporate2 from '../img/Hanalytics/Corporate/Moyen/2.png'
import Coroporate5 from '../img/Hanalytics/Corporate/Moyen/5.png'
import PAC1 from '../img/Pour_Une_Autre_Pac/Moyen/1.png'
import PAC5 from '../img/Pour_Une_Autre_Pac/Moyen/5.png'
import PAC7 from '../img/Pour_Une_Autre_Pac/Moyen/7.png'

const images = [
  { src: Elctron1, alt: 'Hanalytics_Electron', text: 'Hanalytics Electron', link: '/HanalyticsElectron' },
  { src: Elctron5, alt: 'Hanalytics_Electron', text: 'Hanalytics Electron' },
  { src: Elctron8, alt: 'Hanalytics_Electron', text: 'Hanalytics Electron' },
  { src: Application1, alt: 'Hanalytics_Electron', text: 'Hanalytics Application' },
  { src: Application2, alt: 'Hanalytics_Electron', text: 'Hanalytics Application' },
  { src: Application3, alt: 'Hanalytics_Electron', text: 'Hanalytics Application' },
  { src: Coroporate1, alt: 'Hanalytics_Electron', text: 'Hanalytics Corporate' },
  { src: Coroporate2, alt: 'Hanalytics_Electron', text: 'Hanalytics Corporate' },
  { src: Coroporate5, alt: 'Hanalytics_Electron', text: 'Hanalytics Corporate' },
  { src: PAC1, alt: 'Hanalytics_Electron', text: 'Pour une autre pac' },
  { src: PAC5, alt: 'Hanalytics_Electron', text: 'Pour une autre pac' },
  { src: PAC7, alt: 'Hanalytics_Electron', text: 'Pour une autre pac' }
]

const Portofolio = () => {
  return (
    <div className="container-portofolio">
      <div id="portofolio">
        <h2 className="portofolio-title">Portofolio</h2>
        <h3>Quelques expemples de mes dernières réalisations et participation</h3>
        <div id="image-container" className="image-container">
          {images.map((item, i) =>
            <div className="portofolio-gallery" key={i}>
              <div className="container">
                <img src={item.src} alt={item.alt} className="image" />
                <div className="overlay">
                  <div className="text"><Link to={'/HanalyticsElectron'}>{item.text}</Link></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Portofolio
