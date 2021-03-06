import React from 'react';
import 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Blog from './components/Blog';
import Community from './components/Community';
import Docs from './components/Docs';
import Home from './components/Home';
import Nav from './components/Nav';
import Tutorial from './components/Tutorial';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Blog" component={Blog} />
          <Route path="/Community" component={Community} />
          <Route path="/Docs" component={Docs} />
          <Route path="/Tutorial" component={Tutorial} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;