import React, {Component} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import Cv from './components/Cv'
import HanaltyticsElectron from './components/HanalyticsElectron'
import Erreur from './components/Erreur'
import './components/Home.css'

class App extends Component {
  render () {
    return (
      <BrowserRouter >
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/cv" component={Cv} />
          <Route path="/HanalyticsElectron" component={HanaltyticsElectron} />
          <Route component={Erreur} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
