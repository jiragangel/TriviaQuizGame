import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Highscore from './components/Highscore';
import Grade from './components/Grade';
import Manage from './components/Manage';
import Categories from './components/Categories'
import View from './components/View'
import Add from './components/Add'
import Congrats from './components/Congrats'
import ViewCategories from './components/ViewCategories'
import AddCategories from './components/AddCategories'
import DeleteCategories from './components/DeleteCategories'

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
            <Route exact={true} path="/quiz/grade/:score/:total" component={Grade} />
            <Route exact={true} path="/manage" component={Manage} />
            <Route exact={true} path="/manage/view" component={View} />
            <Route exact={true} path="/manage/add" component={Add} />
            <Route exact={true} path="/Congrats" component={Congrats} />
            <Route exact={true} path="/viewCategories" component={ViewCategories} />
            <Route exact={true} path="/addCategories" component={AddCategories} />
            <Route exact={true} path="/DeleteCategories" component={DeleteCategories} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
