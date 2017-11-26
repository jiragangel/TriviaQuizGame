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
			this.getEasyQuestions = this.getEasyQuestions.bind(this);
			this.getMediumQuestions = this.getMediumQuestions.bind(this);
			this.getDifficultQuestions = this.getDifficultQuestions.bind(this);
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

		getEasyQuestions(category){
			return(
				<div>
				{
					this.state.questions.map((ques) => {
						if (ques.Category === category && ques.Difficulty === "Easy"){
							return(
								<p>{ques.Question}</p>
							)
						}else{
							return(
								<p></p>
							)
						}
					})
				}
				</div>
			)

		}

		getMediumQuestions(category){
			return(
				<div>
				{
					this.state.questions.map((ques) => {
						if (ques.Category === category && ques.Difficulty === "Medium"){
							return(
								<p>{ques.Question}</p>
							)
						}else{
							return(
								<p></p>
							)
						}
					})
				}
				</div>
			)

		}

		getDifficultQuestions(category){
			return(
				<div>
				{
					this.state.questions.map((ques) => {
						if (ques.Category === category && ques.Difficulty === "Difficult"){
							return(
								<p>{ques.Question}</p>
							)
						}else{
							return(
								<p></p>
							)
						}
					})
				}
				</div>
			)
		}

	render(){
		return(
			<div className="App">
		        <div className="container">
		          <h1>Questions</h1>
							{this.state.categories.map((cmp)=>{
								return(
									<div>
										<h4>{cmp}</h4>
										<h5>Easy</h5>
										{
											this.state.questions.map((ques) => {
												if (ques.Category === cmp && ques.Difficulty === "Easy"){
													return(
														<div>
															<p>{ques.Question}</p>
															<p className="answer">Answer: {ques.Answer}</p>
														</div>
													)
												}else{
													return(
														<p></p>
													)
												}
											})
										}
										<h5>Medium</h5>
										{
											this.state.questions.map((ques) => {
												if (ques.Category === cmp && ques.Difficulty === "Medium"){
													return(
														<div>
															<p>{ques.Question}</p>
															<p className="answer">Answer: {ques.Answer}</p>
														</div>
													)
												}else{
													return(
														<p></p>
													)
												}
											})
										}
										<h5>Difficult</h5>
										{
											this.state.questions.map((ques) => {
												if (ques.Category === cmp && ques.Difficulty === "Difficult"){
													return(
														<div>
															<p>Question: {ques.Question}</p>
															<p className="answer">Answer: {ques.Answer}</p>
														</div>
													)
												}else{
													return(
														<p></p>
													)
												}
											})
										}
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
