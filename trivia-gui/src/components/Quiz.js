import React, { Component } from 'react';

const getRandom = (min, max) => {
  let num = Math.floor(Math.random() * (max - min) + min);
  return num;
}

class Quiz extends Component{
  constructor(props){
    super(props);

    this.state = {
      one: this.props.match.params.one,
      two: this.props.match.params.two,
      three: this.props.match.params.three,
      noOfQuestions: this.props.match.params.noOfQuestions,
      questions: [{
        Difficulty: [{
          Questions: [{
            Question: '',
            Answer: ''
          }]
        }]
      }],
      itemNo: 0,
      passed: 1,
      selectedOption: ''
    };

    this.handleAnswers = this.handleAnswers.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }
  handleOptionChange(e) {
    this.setState({
      selectedOption: e.target.value
    });
  }

  handleAnswers(){
    if (this.state.questions[0].Difficulty[0].Questions[this.state.itemNo].Answer === this.state.selectedOption){
      //Correct
    }else{
      //Wrong
    };

    this.setState({
      itemNo: getRandom(0,this.state.questions[0].Difficulty[0].Questions.length),
      passed: this.state.passed + 1
    });
  }

  componentDidMount(){
  	fetch(`http://localhost:3001/game/showQuestions`)
  	.then((response) => { return response.json() })
  		.then((result) => {
  			this.setState({
    			questions:result,
          itemNo: getRandom(0,result[0].Difficulty[0].Questions.length)
    		});
  	})
  	.catch((e) => {console.log(e)});
  }

	render(){
		return(
			<form action="">
				<div className="App">
			        <div className="container">
			            <div className="quizArea">
			                <div className="quizHeader">
			                	<h2 className="itemNo">{this.state.passed}</h2>
			                	<div className="question">{this.state.questions[0].Difficulty[0].Questions[this.state.itemNo].Question}</div>
			                	<div className="choices">
				                	<input
                            type="radio"
                            name="Choices"
                            value={this.state.questions[0].Difficulty[0].Questions[this.state.itemNo].choiceA}
                            checked={this.state.selectedOption === this.state.questions[0].Difficulty[0].Questions[this.state.itemNo].choiceA}
                            onChange={this.handleOptionChange}
                          />     A. {this.state.questions[0].Difficulty[0].Questions[this.state.itemNo].choiceA}
				                </div>
				                <div className="choices">
				                	<input
                            type="radio"
                            name="Choices"
                            value={this.state.questions[0].Difficulty[0].Questions[this.state.itemNo].choiceB}
                            checked={this.state.selectedOption === this.state.questions[0].Difficulty[0].Questions[this.state.itemNo].choiceB}
                            onChange={this.handleOptionChange}
                          />     B. {this.state.questions[0].Difficulty[0].Questions[this.state.itemNo].choiceB}
				                </div>
				                <div className="choices">
				                	<input
                            type="radio"
                            name="Choices"
                            value={this.state.questions[0].Difficulty[0].Questions[this.state.itemNo].choiceC}
                            checked={this.state.selectedOption === this.state.questions[0].Difficulty[0].Questions[this.state.itemNo].choiceC}
                            onChange={this.handleOptionChange}
                          />     C. {this.state.questions[0].Difficulty[0].Questions[this.state.itemNo].choiceC}
				                </div>
				                <div className="choices">
				                	<input
                            type="radio"
                            name="Choices"
                            value={this.state.questions[0].Difficulty[0].Questions[this.state.itemNo].choiceD}
                            checked={this.state.selectedOption === this.state.questions[0].Difficulty[0].Questions[this.state.itemNo].choiceD}
                            onChange={this.handleOptionChange}
                          />     D. {this.state.questions[0].Difficulty[0].Questions[this.state.itemNo].choiceD}
				                </div>
				                <input type="button" onClick={this.handleAnswers} value="Submit Answer" className="next-btn"/>
			                </div>
			            </div>
			        </div>
			    </div>
		    </form>
		);
	}
}

export default Quiz;
