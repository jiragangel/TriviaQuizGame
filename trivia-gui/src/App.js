import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Categories from './components/Categories';
import Quiz from './components/Quiz';
// import Highscore from './components/Highscore';
// import Edit from './components/Edit';

import  { BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/categories" component={Categories} />
            <Route exact={true} path="/quiz/:one/:two/:three/:noOfQuestions" component = {Quiz} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
