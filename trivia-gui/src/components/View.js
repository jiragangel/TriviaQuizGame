import React, { Component } from 'react';

const getRandom = (min, max) => {
  let num = Math.floor(Math.random() * (max - min) + min);
  return num;
}


class View extends Component{
	  constructor(props){
    super(props);

    this.state = {
      category: '',
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
      passed: 1,
      selectedOption: '',
      score: 0,
      questionCount: 0,
    }
}

    componentDidMount(){
	  	fetch(`http://localhost:3001/game/showQuestions`)
	  	.then((response) => { return response.json() })
	  		.then((result) => {
	        let counter = 0;
	        for (let i = 0; i < result.length ; i++){
	        	this.setState({
	        		category: result[i].category
	        	})
	            if (result[i].Difficulty === 'Easy'){
	                this.state.easy.push(result[i]);
	            }else if (result[i].Difficulty === 'Medium'){
	                this.state.medium.push(result[i]);
	            }else {
	                this.state.hard.push(result[i]);
	            }
	        };
	  			this.setState({
	          easy: this.state.easy.slice(1),
	          medium: this.state.medium.slice(1),
	          hard: this.state.hard.slice(1),
	          questionCount: counter,
	    			questions:result,
	    		});

	        this.setState({
	          curQuestions: this.state.easy,
	          itemNo: getRandom(0,this.state.easy.length)
	        })
	  	})
	  	.catch((e) => {console.log(e)});
	  }


	render(){
		return(
			<div className="App">
		        <body className="container">
		           <h1>Questions</h1>
		               this.state.easy.map()
		            <a class="home-btn" href="/manage">Back</a>
		        </body>
		    </div>
		);
	}
}

export default View;
