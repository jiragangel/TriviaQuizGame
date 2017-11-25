import React, { Component } from 'react';


class View extends Component{
	constructor(props){
   		super(props);

    	this.state = {
    		questions: [{
    			Category: "",
    			Difficulty:"",
    			Qs:"",
    			Answer:"",
    			choiceA:"",
    			choiceB:"",
    			choiceC:"",
    			choiceD:""
    		}],
    		categories: []
    	}

	}


	  componentDidMount = () => {
	    fetch(`http://localhost:3001/game/showCategories`)
	    .then((response) => { return response.json() })
	    .then((result) => {
	      this.setState({
	        categories: result
	      })
	    }).catch((e) => {console.log(e)});
	    fetch(`http://localhost:3001/game/showQuestions`)
	    .then((response) => { return response.json() })
	    .then((result) => {
	      this.setState({
	        questions: result
	      })
	    }).catch((e) => {console.log(e)});
	  }

	render(){
		return(
			<div className="App">
		        <div className="container">
		           <h1>Questions</h1>
							{this.state.categories.map((cmp)=>{
								return(
									<div>
										<h1>{cmp}</h1>
										{this.state.questions.map((item)=>{
											if(item.Category===cmp){
												return(
												<div>
													{this.state.questions.map((easy)=>{
														console.log(easy.Difficulty);
														if(easy.Difficulty==="Easy"){
															return(
																<p>{easy.Question}</p>
															)
														}
													})}
													{this.state.questions.map((med)=>{
														if(med.Difficulty==="Medium"){
															return(
																<p>{med.Question}</p>
															)
														}
													})}
													{this.state.questions.map((hard)=>{
														if(hard.Difficulty==="Difficult"){
															return(
																<p>{hard.Question}</p>
															)
														}
													})}
												</div>
											)
										}
									})}
								</div>
								)
							})}
		          <a className="home-btn" href="/manage">Back</a>
		        </div>
		    </div>
		);
	}
}

export default View;
