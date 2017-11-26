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
import DeleteQuestions from './components/DeleteQuestions'
import EditQuestions from './components/EditQuestions'
import EditCategories from './components/EditCategories'

import  { BrowserRouter as Router, Route} from 'react-router-dom'

var songs = [
  {
    url: '/bgm.mp3'
  }
];

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
            <Route exact={true} path="/quiz/grade/:score/:total/:one/:two/:three" component={Grade} />
            <Route exact={true} path="/manage" component={Manage} />
            <Route exact={true} path="/manage/view" component={View} />
            <Route exact={true} path="/manage/add" component={Add} />
            <Route exact={true} path="/Congrats" component={Congrats} />
            <Route exact={true} path="/viewCategories" component={ViewCategories} />
            <Route exact={true} path="/addCategories" component={AddCategories} />
            <Route exact={true} path="/DeleteCategories" component={DeleteCategories} />
            <Route exact={true} path="/DeleteQuestions" component={DeleteQuestions} />
            <Route exact={true} path="/EditQuestions" component={EditQuestions} />
            <Route exact={true} path="/EditCategories" component={EditCategories} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
