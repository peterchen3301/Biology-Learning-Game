import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import './common.css';

import PageHeader from './common/page-header';
import ChooseGame from './choose-game';
// import GameViewContainer from './game-view';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-container">
          <PageHeader page="BioPro - Learn Biology the fun way" />
          <div className="app-view-container">
            <Switch>
              <Route path="/">
                <ChooseGame />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;