import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Quiz from './components/Quiz';
<<<<<<< HEAD
// import Highscore from './components/Highscore';
// import Edit from './components/Edit';

=======
import Highscore from './components/Highscore';
import Grade from './components/Grade';
>>>>>>> f69c0fb27fe6af2c7301262c3a5435bad430a547
import  { BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact={true} path="/" component={Home} />
<<<<<<< HEAD
            <Route exact={true} path="/categories" component={Categories} />
            <Route exact={true} path="/quiz/:one/:two/:three/:noOfQuestions" component = {Quiz} />
=======
            <Route exact={true} path="/quiz" component={Quiz} />
            <Route exact={true} path="/highscore" component={Highscore} />
            <Route exact={true} path="/grade" component={Grade} />
>>>>>>> f69c0fb27fe6af2c7301262c3a5435bad430a547
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
