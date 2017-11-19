import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Highscore from './components/Highscore';
import Grade from './components/Grade';
import Manage from './components/Manage';
import Categories from './components/Categories'
import View from './components/View'

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
            <Route exact={true} path="/highscore" component={Highscore} />
            <Route exact={true} path="/quiz/grade" component={Grade} />
            <Route exact={true} path="/manage" component={Manage} />
            <Route exact={true} path="/manage/view" component={View} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
