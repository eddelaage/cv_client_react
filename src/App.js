import React, {Component} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import Cv from './components/Cv'
import HanaltyticsElectron from './components/HanalyticsElectron'
import HanalyticsApp from './components/HanalyticsApp'
import HanalyticsCorporate from './components/HanalyticsCorporate'
import PourUneAutrePac from './components/PourUneAutrePac'
import MyHuntingBoardDetail from './components/MyHuntingBoardDetail'
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
          <Route path="/HanalyticsApp" component={HanalyticsApp} />
          <Route path="/HanalyticsCorporate" component={HanalyticsCorporate} />
          <Route path="/PourUneAutrePac" component={PourUneAutrePac} />
          <Route path="/MyHuntingBoardDetail" component={MyHuntingBoardDetail} />
          <Route component={Erreur} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
