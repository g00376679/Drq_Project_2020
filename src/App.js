import React, { Component } from 'react';
import './App.css';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './views/home/home';
import Read from './views/read/read';
import Create from './views/create/create';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <br />
          <div className="switchContainer">
            <Switch>
              <Route path='/' component={Home} exact />
              <Route path='/create' component={Create} exact />
              <Route path='/read' component={Read} exact />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;