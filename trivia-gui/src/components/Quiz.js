import React, { Component } from 'react';
import Checkbox from './Checkbox';

const items = [
  'Science',
  'Entertainment',
  'Geography',
  'History',
  'Sports'
];

const getQueryString = (selectedCheckboxes) => {
  let query = '';
  for (const checkbox of selectedCheckboxes) {
    console.log(checkbox);
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
      query: ''
    }

    this.handleNoChange = this.handleNoChange.bind(this);
  }
  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
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
    items.map(this.createCheckbox)
  )

  render() {
    return (
      <div className="containerCategories">
        <h1 className="quizName">Categories</h1>
        <div className="quizArea">
          <div className="quizHeader">
            <form onSubmit={this.handleFormSubmit}>
              <input className="button" onChange={this.handleNoChange} placeholder="Enter number of questions"/>
              {this.createCheckboxes()}
              <a href={`/quiz/${getQueryString(this.selectedCheckboxes)}${this.state.noOfQuestions}`} className="button">
                Start Game
              </a>
            </form>

          </div>
        </div>
      </div>
    );
  }
}

export default Categories;
