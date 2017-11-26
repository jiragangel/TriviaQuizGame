import React, { Component } from 'react';
import Checkbox from './Checkbox';
import  { Redirect } from 'react-router-dom'

const getQueryString = (selectedCheckboxes) => {
  let query = '';
  for (const checkbox of selectedCheckboxes) {
    query = query + checkbox + '/';
  }

  return query;
}

class Categories extends Component {
  constructor(props){
    super(props);

    this.state = {
      checked: [],
      noOfQuestions: 3,
      query: '',
      redirect: false,
      categories: []
    }

    this.handleNoChange = this.handleNoChange.bind(this);
    this.checkCategories = this.checkCategories.bind(this);
  }
  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }

  componentDidMount = () => {
    fetch(`http://localhost:3001/game/showCategories`)
    .then((response) => { return response.json() })
    .then((result) => {
      this.setState({
        categories: result
      })
    }).catch((e) => {console.log(e)});
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
    this.setState({
      query: getQueryString(this.selectedCheckboxes)
    });
  }

  handleNoChange(e){
    this.setState({
      noOfQuestions: e.target.value
    })
  }

  createCheckbox = label => (
    <Checkbox
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label}
    />
  )

  createCheckboxes = () => (
    this.state.categories.map(this.createCheckbox)
  )

  checkCategories(e){
    if (this.selectedCheckboxes.size === 3 && this.state.noOfQuestions >= 3) {
      this.setState({
        redirect: true
      });
    }
    this.forceUpdate();
  }

  render(){
    if (this.state.redirect){
      return (<Redirect to={`/quiz/${getQueryString(this.selectedCheckboxes)}${this.state.noOfQuestions}`} />)
    }else{
      return (
        <div className="containerCategories">
          <h1 className="quizName">Categories</h1>
          <div className="quizArea">
            <div className="quizHeader">
              <form onSubmit={this.handleFormSubmit}>
                <input className="button" type="number" onChange={this.handleNoChange} min="3" placeholder="Number of questions"/>
                <input className="startButton" type="button" onClick={this.checkCategories} value="Start Game"/>
                {this.createCheckboxes()}
                <a className="home-btn" href="/">Back</a>
              </form>

            </div>
          </div>
        </div>
      );
    }
  }
}

export default Categories;
