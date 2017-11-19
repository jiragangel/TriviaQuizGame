import React, { Component } from 'react';
<<<<<<< HEAD
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
=======

class Quiz extends Component{
	render(){
		return(
			<form action="">
				<div className="App">
			        <body className="container">
			            <h1 className="quizName"></h1>
			            <div className="quizArea">
			                <div className="quizHeader">
			                	<h2 className="itemNo">1</h2>
			                	<div className="question">Hello</div>
			                	<div className="choices">
				                	<input type="radio" name="A" value="a" />     A. Hi
				                </div>
				                <div className="choices">
				                	<input type="radio" name="A" value="c" />     C. Hi
				                </div>
				                <div className="choices">
				                	<input type="radio" name="A" value="b" />     B. Hi
				                </div>
				                <div className="choices">
				                	<input type="radio" name="A" value="d" />     D. Hi
				                </div>

			                </div>
			            </div>
			        </body>
			    </div>
		    </form>
		);
	}
}

export default Quiz;
>>>>>>> f69c0fb27fe6af2c7301262c3a5435bad430a547
