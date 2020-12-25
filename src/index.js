import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import Instructions from './components/InstructionsContainer'

import {Route, BrowserRouter as Router} from 'react-router-dom'
import './styles/Cards.css'


ReactDOM.render(
  <Router>
      <Route path='/' exact component={MainContainer} />
      <Route path='/instructions' component={Instructions} />
  </Router>,
  document.getElementById('root')
);

