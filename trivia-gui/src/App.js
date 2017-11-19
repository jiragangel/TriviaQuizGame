import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Highscore from './components/Highscore';
import Grade from './components/Grade';
import  { BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/quiz" component={Quiz} />
            <Route exact={true} path="/highscore" component={Highscore} />
            <Route exact={true} path="/grade" component={Grade} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
