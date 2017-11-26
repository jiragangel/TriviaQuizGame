import React, { Component } from 'react';
import  { Redirect } from 'react-router-dom'

const getRandom = (max) => {
  let num = Math.floor(Math.random() * (max));
  return num;
}

const isInArray = (value,array) => {
  for (let i = 0 ; i < array.length ; i++){
    if (array[i] === value){
      return true;
    }
  }
  return false;
}

class Quiz extends Component{
  constructor(props){
    super(props);

    this.state = {
      one: this.props.match.params.one,
      two: this.props.match.params.two,
      three: this.props.match.params.three,
      noOfQuestions: this.props.match.params.noOfQuestions,
      easy: [{
        Question: '',
        Difficulty: '',
        choiceA: '',
        choiceB: '',
        choiceC: '',
        choiceD: ''
      }],
      medium: [{
        Question: '',
        Difficulty: '',
        choiceA: '',
        choiceB: '',
        choiceC: '',
        choiceD: ''
      }],
      hard: [{
        Question: '',
        Difficulty: '',
        choiceA: '',
        choiceB: '',
        choiceC: '',
        choiceD: ''
      }],
      curQuestions: [{
        Question: '',
        Difficulty: '',
        choiceA: '',
        choiceB: '',
        choiceC: '',
        choiceD: ''
      }],
      itemNo: 0,
      itemNos: [],
      passed: 1,
      selectedOption: '',
      score: 0,
      questionCount: 0,
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
    if (this.state.curQuestions[this.state.itemNo].Answer === this.state.selectedOption){
      if (this.state.curQuestions[this.state.itemNo].Difficulty === 'Easy'){
        this.setState({
          score: this.state.score + 1
        });
      }else if (this.state.curQuestions[this.state.itemNo].Difficulty === 'Medium'){
        this.setState({
          score: this.state.score + 2
        });
      }else {
        this.setState({
          score: this.state.score + 3
        });
      }
    };
    if (this.state.passed === this.state.noOfQuestions * 2){//easy level
      this.setState({
        itemNos: [],
        curQuestions: this.state.hard
      })
    }else if (this.state.passed === this.state.noOfQuestions * 1){//medium
      this.setState({
        itemNos: [],
        curQuestions: this.state.medium
      })
    }else if (this.state.passed === 0){//easy
      this.setState({
        itemNos: [],
        curQuestions: this.state.easy
      })
    }
    let randomNo;
    do {
      randomNo = getRandom(this.state.curQuestions.length);
    }while(isInArray(randomNo,this.state.itemNos));

    this.state.itemNos.push(randomNo);
    this.setState({
      itemNo: randomNo,
      passed: this.state.passed + 1
    })

    this.setState({
      selectedOption: ""
    })
  }

  componentDidMount(){
  	fetch(`http://localhost:3001/game/showQuestions`)
  	.then((response) => { return response.json() })
  		.then((result) => {
        let counter = 0;
        for (let i = 0; i < result.length ; i++){
          if (result[i].Category === this.state.one || result[i].Category === this.state.two || result[i].Category === this.state.three){
            if (result[i].Difficulty === 'Easy'){
                this.state.easy.push(result[i]);
            }else if (result[i].Difficulty === 'Medium'){
                this.state.medium.push(result[i]);
            }else {
                this.state.hard.push(result[i]);
            }
          }
        };
  			this.setState({
          easy: this.state.easy.slice(1),
          medium: this.state.medium.slice(1),
          hard: this.state.hard.slice(1),
          questionCount: counter,
    			questions:result,
    		});

        let randomNo = getRandom(0,this.state.easy.length);
        this.state.itemNos.push(randomNo);

        this.setState({
          curQuestions: this.state.easy,
          itemNo: randomNo
        })
  	})
  	.catch((e) => {console.log(e)});
  }

	render(){
    if (this.state.passed > this.state.noOfQuestions * 3){
      let total = 0;
      total = parseInt(this.state.noOfQuestions,10) + parseInt(this.state.noOfQuestions*2,10) + parseInt(this.state.noOfQuestions*3,10);
      return (<Redirect to={`/quiz/grade/${this.state.score}/${total}/${this.state.one}/${this.state.two}/${this.state.three}`} />)
    };
    //MULTIPLE CHOICE
    if (this.state.curQuestions[this.state.itemNo].Type === 'Multiple Choice'){
      return(
			<form action="">
				<div className="App">
			        <div className="containerQuiz">
			            <div className="quizArea">
			                <div className="quizHeader">
			                	<h2 className="itemNo">{this.state.passed}</h2>
                        <h6>{this.state.curQuestions[this.state.itemNo].Category}</h6>
                        <h6>{this.state.curQuestions[this.state.itemNo].Difficulty}</h6>
			                	<div className="question">{this.state.curQuestions[this.state.itemNo].Question}</div>
			                	<div className="choices">
				                	<input
                            type="radio"
                            name="Choices"
                            value={this.state.curQuestions[this.state.itemNo].choiceA}
                            checked={this.state.selectedOption === this.state.curQuestions[this.state.itemNo].choiceA}
                            onChange={this.handleOptionChange}
                          />     A. {this.state.curQuestions[this.state.itemNo].choiceA}
				                </div>
				                <div className="choices">
				                	<input
                            type="radio"
                            name="Choices"
                            value={this.state.curQuestions[this.state.itemNo].choiceB}
                            checked={this.state.selectedOption === this.state.curQuestions[this.state.itemNo].choiceB}
                            onChange={this.handleOptionChange}
                          />     B. {this.state.curQuestions[this.state.itemNo].choiceB}
				                </div>
				                <div className="choices">
				                	<input
                            type="radio"
                            name="Choices"
                            value={this.state.curQuestions[this.state.itemNo].choiceC}
                            checked={this.state.selectedOption === this.state.curQuestions[this.state.itemNo].choiceC}
                            onChange={this.handleOptionChange}
                          />     C. {this.state.curQuestions[this.state.itemNo].choiceC}
				                </div>
				                <div className="choices">
				                	<input
                            type="radio"
                            name="Choices"
                            value={this.state.curQuestions[this.state.itemNo].choiceD}
                            checked={this.state.selectedOption === this.state.curQuestions[this.state.itemNo].choiceD}
                            onChange={this.handleOptionChange}
                          />     D. {this.state.curQuestions[this.state.itemNo].choiceD}
				                </div>
                        <div>
				                    <input type="button" onClick={this.handleAnswers} value="Submit Answer" className="next-btn"/>
                        </div>
			                </div>
			            </div>
			        </div>
			    </div>
		    </form>
		)}else if (this.state.curQuestions[this.state.itemNo].Type === 'True or False'){
      return(
        <form action="">
          <div className="App">
                <div className="containerQuiz">
                    <div className="quizArea">
                        <div className="quizHeader">
                          <h2 className="itemNo">{this.state.passed}</h2>
                          <h6>{this.state.curQuestions[this.state.itemNo].Category}</h6>
                          <h6>{this.state.curQuestions[this.state.itemNo].Difficulty}</h6>
                          <div className="question">{this.state.curQuestions[this.state.itemNo].Question}</div>
                          <div className="choices">
                            <input
                              type="radio"
                              name="Choices"
                              value={this.state.curQuestions[this.state.itemNo].choiceA}
                              checked={this.state.selectedOption === this.state.curQuestions[this.state.itemNo].choiceA}
                              onChange={this.handleOptionChange}
                            />     {this.state.curQuestions[this.state.itemNo].choiceA}
                          </div>
                          <div className="choices">
                            <input
                              type="radio"
                              name="Choices"
                              value={this.state.curQuestions[this.state.itemNo].choiceB}
                              checked={this.state.selectedOption === this.state.curQuestions[this.state.itemNo].choiceB}
                              onChange={this.handleOptionChange}
                            />     {this.state.curQuestions[this.state.itemNo].choiceB}
                          </div>
                          <input type="button" onClick={this.handleAnswers} value="Submit Answer" className="next-btn"/>
                        </div>
                    </div>
                </div>
            </div>
          </form>
        )
    }else if (this.state.curQuestions[this.state.itemNo].Type === 'Identification'){//Identification
      return(
        <form action="">
          <div className="App">
                <div className="containerQuiz">
                    <div className="quizArea">
                        <div className="quizHeader">
                          <h2 className="itemNo">{this.state.passed}</h2>
                          <h6>{this.state.curQuestions[this.state.itemNo].Category}</h6>
                          <h6>{this.state.curQuestions[this.state.itemNo].Difficulty}</h6>
                          <div className="question">{this.state.curQuestions[this.state.itemNo].Question}</div>
                            <input
                              className="choices"
                              placeholder="Answer"
                              onChange={this.handleOptionChange}
                            />
                          <input type="button" onClick={this.handleAnswers} value="Submit Answer" className="next-btn"/>
                        </div>
                    </div>
                </div>
            </div>
          </form>
        )
    }else{//Number
      return(
        <form action="">
          <div className="App">
                <div className="containerQuiz">
                    <div className="quizArea">
                        <div className="quizHeader">
                          <h2 className="itemNo">{this.state.passed}</h2>
                          <h6>{this.state.curQuestions[this.state.itemNo].Category}</h6>
                          <h6>{this.state.curQuestions[this.state.itemNo].Difficulty}</h6>
                          <div className="question">{this.state.curQuestions[this.state.itemNo].Question}</div>
                            <input
                              type="Number"
                              className="choices"
                              placeholder="Answer"
                              onChange={this.handleOptionChange}
                            />
                          <input type="button" onClick={this.handleAnswers} value="Submit Answer" className="next-btn"/>
                        </div>
                    </div>
                </div>
            </div>
          </form>
        )
    }
	}
}

export default Quiz;
