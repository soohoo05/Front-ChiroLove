import React, { Component } from 'react';
import './App.css';
import {Button} from 'semantic-ui-react'
import {Switch, Route} from 'react-router-dom'
import ChiropractorDisplay from './routes/ChiropractorDisplay'
import NavBar from './components/NavBar'
import Home from './components/Home'
class App extends Component {
  render() {
    return (
      <div className="container">
      <NavBar/>
      <Switch>
        <Route exact path ="/" component={Home}/>
        <Route exact path="/Chiropractor/:id" component={ChiropractorDisplay}/>
      </Switch>
    </div>
    );
  }
}

export default App;
