import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Actors from './Actors';
import Movies from './Movies';
import Directors from './Directors';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/actors" component={Actors} />
        <Route path="/movies" component={Movies} />
        <Route path="/directors" component={Directors} />
      </Switch>
    </Router>
  );
};

export default App;
