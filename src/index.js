import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import GameLogic from './components/GameLogic';
import HowToPlay from './components/HowToPlay'

import {Route, BrowserRouter as Router} from 'react-router-dom'
import './styles/Cards.css'


ReactDOM.render(
  <Router>
      <Route path='/' exact component={GameLogic} />
      <Route path='/howtoplay' component={HowToPlay} />
  </Router>,
  document.getElementById('root')
);

