import React from 'react'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import './AsidePres.css'

const AsidePres = () => {
  return (
    <div className="container-aside">

      <div className="container-profil-picture">
        <div className="profil-picture">
        </div>
      </div>

      <div className="container-aside-description">
        <div className="Name">
          <h1>Edouard de Laage</h1>
        </div>
        <div className="Spec">
          <h2>Developpeur Web Javascript</h2>
          <p>React / Redux / Node JS</p>
        </div>
        <div className="social-networks">
          <a href="https://www.linkedin.com/in/edouard-de-laage-4711818/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin link-aside"></i></a>
          <a href="https://github.com/eddelaage" target="_blank" rel="noopener noreferrer"><i className="fa fa-github link-aside"></i></a>
        </div>
        <div className="contact">
          <p className="link-aside">06 07 73 62 26</p>
          <p><a className="link-aside" href="mailto:edouarddelaage@gmail.com"> edouarddelaage@gmail.com</a></p>
        </div>
      </div>

    </div>
  )
}

export default AsidePres
