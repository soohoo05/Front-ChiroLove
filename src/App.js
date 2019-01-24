import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import ChiropractorDisplay from './routes/ChiropractorDisplay'
import NavBar from './components/NavBar'
import Home from './routes/Home'
import Search from './routes/Search'
class App extends Component {
  render() {
    return (
      <div className="container">
      <NavBar/>
      <Switch>
        <Route exact path ="/" component={Home}/>
        <Route exact path="/Chiropractor/:id" component={ChiropractorDisplay}/>
        <Route exact path ="/Search" component={Search}/>
      </Switch>
    </div>
    );
  }
}

export default App;
