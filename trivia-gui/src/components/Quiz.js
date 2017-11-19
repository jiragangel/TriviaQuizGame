import React, { Component } from 'react';

class Quiz extends Component{
  constructor(props){
    super(props);

    this.state = {
      one: this.props.match.params.one,
      two: this.props.match.params.two,
      three: this.props.match.params.three,
      noOfQuestions: this.props.match.params.noOfQuestions,
      questions: [{
        Entertainment: {
          Difficult: [{
            Question: ''
          }]
        }
      }]
    };
  }

  componentDidMount(){
  	fetch(`http://localhost:3001/game/showQuestions`)
  	.then((response) => { return response.json() })
  		.then((result) => {
  			this.setState({
    			questions:result
    		});
        console.log(result[0].Entertainment.Difficult[0].Question);
  	})
  	.catch((e) => {console.log(e) });
  }

	render(){
		return(
			<form action="">
				<div className="App">
			        <div className="container">
			            <div className="quizArea">
			                <div className="quizHeader">
			                	<h2 className="itemNo">1</h2>
			                	<div className="question">{this.state.questions[0].Entertainment.Difficult[0].Question}</div>
			                	<div className="choices">
				                	<input type="radio" name="A" value="a" />     A. {this.state.questions[0].Entertainment.Difficult[0].choiceA}
				                </div>
				                <div className="choices">
				                	<input type="radio" name="A" value="c" />     C. {this.state.questions[0].Entertainment.Difficult[0].choiceC}
				                </div>
				                <div className="choices">
				                	<input type="radio" name="A" value="b" />     B. {this.state.questions[0].Entertainment.Difficult[0].choiceB}
				                </div>
				                <div className="choices">
				                	<input type="radio" name="A" value="d" />     D. {this.state.questions[0].Entertainment.Difficult[0].choiceD}
				                </div>

			                </div>
			            </div>
			        </div>
			    </div>
		    </form>
		);
	}
}

export default Quiz;
