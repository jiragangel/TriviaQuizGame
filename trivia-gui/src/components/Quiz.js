import React, { Component } from 'react';

const getRandom = (min, max) => {
  console.log("Max: " + max);
  console.log("Min: " + min);
  let num = Math.floor(Math.random() * (max - min) + min);
  console.log("Num: " + num)
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
            Question: ''
          }]
        }]
      }],
      itemNo: 0,
      passed: 1
    };

    this.handleAnswers = this.handleAnswers.bind(this)
  }

  handleAnswers(){
    this.setState({
      itemNo: getRandom(0,this.state.questions[0].Difficulty[0].Questions.length),
      passed: this.state.passed + 1
    });

    this.forceUpdate();
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
				                	<input type="radio" name="A" value="a" />     A. {this.state.questions[0].Difficulty[0].Questions[this.state.itemNo].Question.choiceA}
				                </div>
				                <div className="choices">
				                	<input type="radio" name="B" value="b" />     B. {this.state.questions[0].Difficulty[0].Questions[this.state.itemNo].Question.choiceB}
				                </div>
				                <div className="choices">
				                	<input type="radio" name="C" value="c" />     C. {this.state.questions[0].Difficulty[0].Questions[this.state.itemNo].Question.choiceC}
				                </div>
				                <div className="choices">
				                	<input type="radio" name="D" value="d" />     D. {this.state.questions[0].Difficulty[0].Questions[this.state.itemNo].Question.choiceD}
				                </div>
				                <input type="button" onClick={this.handleAnswers} value="Submit Answer" class="next-btn"/>
			                </div>
			            </div>
			        </div>
			    </div>
		    </form>
		);
	}
}

export default Quiz;
