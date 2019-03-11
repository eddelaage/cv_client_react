import React from 'react'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link'

import './Portofolio.css'

import PAC1 from '../img/PourUneAutrePac/Moyen/1.png'
import PAC5 from '../img/PourUneAutrePac/Moyen/5.png'
import PAC7 from '../img/PourUneAutrePac/Moyen/7.png'
import Elctron1 from '../img/Hanalytics/Electron/Moyen/1.png'
import Elctron5 from '../img/Hanalytics/Electron/Moyen/5.png'
import Elctron8 from '../img/Hanalytics/Electron/Moyen/8.png'
import Application1 from '../img/Hanalytics/App/Moyen/1.png'
import Application2 from '../img/Hanalytics/App/Moyen/2.png'
import Application3 from '../img/Hanalytics/App/Moyen/3.png'
import Coroporate1 from '../img/Hanalytics/Corporate/Moyen/1.png'
import Coroporate2 from '../img/Hanalytics/Corporate/Moyen/2.png'
import Coroporate5 from '../img/Hanalytics/Corporate/Moyen/5.png'

const images = [
  { src: PAC1, alt: 'Pour_une_autre_PAC', text: 'Pour une autre PAC', link: '/PourUneAutrePac#Header' },
  { src: PAC5, alt: 'Pour_une_autre_PAC', text: 'Pour une autre PAC', link: '/PourUneAutrePac#Header' },
  { src: PAC7, alt: 'Pour_une_autre_PAC', text: 'Pour une autre PAC', link: '/PourUneAutrePac#Header' },
  { src: Elctron1, alt: 'Hanalytics_Electron', text: 'Hanalytics Electron', link: '/HanalyticsElectron#Header' },
  { src: Elctron5, alt: 'Hanalytics_Electron', text: 'Hanalytics Electron', link: '/HanalyticsElectron#Header' },
  { src: Elctron8, alt: 'Hanalytics_Electron', text: 'Hanalytics Electron', link: '/HanalyticsElectron#Header' },
  { src: Application1, alt: 'Analytics_application', text: 'Hanalytics Application', link: '/HanalyticsApp#Header' },
  { src: Application2, alt: 'Analytics_application', text: 'Hanalytics Application', link: '/HanalyticsApp#Header' },
  { src: Application3, alt: 'Analytics_application', text: 'Hanalytics Application', link: '/HanalyticsApp#Header' },
  { src: Coroporate1, alt: 'Analytics_application', text: 'Hanalytics Corporate', link: '/HanalyticsCorporate#Header' },
  { src: Coroporate2, alt: 'Analytics_application', text: 'Hanalytics Corporate', link: '/HanalyticsCorporate#Header' },
  { src: Coroporate5, alt: 'Analytics_application', text: 'Hanalytics Corporate', link: '/HanalyticsCorporate#Header' }
]

const Portofolio = () => {
  return (
    <div className="container-portofolio">
      <div id="portofolio">
        <h2 className="portofolio-title">Portofolio</h2>
        <h3>Quelques exemples de mes dernières réalisations et participation</h3>
        <div id="image-container" className="image-container">
          {images.map((item, i) =>
            <div className="portofolio-gallery" key={i}>
              <div className="container">
                <img src={item.src} alt={item.alt} className="image" />
                <div className="overlay">
                  <div className="text"><Link to={`${item.link}`}>{item.text}</Link></div>
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
