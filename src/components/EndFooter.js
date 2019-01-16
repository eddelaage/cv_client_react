import React from 'react'
import Grid from '@material-ui/core/Grid'

import './EndFooter.css'

const EndFooter = () => {
  return (
    <div className="container-footer-low">
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <div className="social-network">
            <a href="https://www.linkedin.com/in/edouard-de-laage-4711818/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
            <a href="https://github.com/eddelaage" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
          </div>
          <div>
            <p>© 2018 Made by Edouard de Laage / Développeur web</p>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default EndFooter
