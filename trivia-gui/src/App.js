import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Categories from './components/Categories';
import Quiz from './components/Quiz';
import Highscore from './components/Highscore';
import Edit from './components/Edit';

class App extends Component {
  render() {
    return (
      <div className="App">
        <body className="container">
           <h1 class="quizName">Trivia Quiz</h1>

            <div class="quizArea">
                <div class="quizHeader">
                    <a class="button" href="#">Start Game</a>
                    <a class="button" href="#">High Scores</a>
                    <a class="button" href="#">Questions</a>
                </div>
            </div>
        </body>
        <Router>
          <div>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/categories" component={Categories} />
            <Route exact={true} path="/quiz" component={Quiz} />
            <Route exact={true} path="/highscore" component={Highscore} />
            <Route exact={true} path="/edit" component={Edit} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
