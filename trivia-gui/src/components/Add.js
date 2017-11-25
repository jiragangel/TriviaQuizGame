import React, { Component } from 'react';

const showField = (type) => {
	if (type === "Multiple Choice"){
    	return <div>
    				<input onChange={this.handleChoiceAChange} className="inputField" type="text" id="name" name="name" placeholder="Choice A"/>
                	<input onChange={this.handleChoiceBChange} className="inputField" type="text" id="name" name="name" placeholder="Choice B"/>
                	<input onChange={this.handleChoiceCChange} className="inputField" type="text" id="name" name="name" placeholder="Choice C"/>
                	<input onChange={this.handleChoiceDChange} className="inputField" type="text" id="name" name="name" placeholder="Choice D"/>
    			</div>
	}else{
		return <div> </div>
	}
}

class Add extends Component{
	constructor(props){
		super(props);

		this.state = {
			category: '',
			difficulty: '',
			type: '',
			question: '',
			answer: '',
			choiceA: '',
			choiceB: '',
			choiceC: '',
			choiceD: '',
			prompt: ''
		}

		this.handleCategoryChange = this.handleCategoryChange.bind(this);
		this.handleDifficultyChange = this.handleDifficultyChange.bind(this);
		this.handleTypeChange = this.handleTypeChange.bind(this);
		this.handleQuestionChange = this.handleQuestionChange.bind(this);
		this.handleAnswerChange = this.handleAnswerChange.bind(this);
		this.handleChoiceAChange = this.handleChoiceAChange.bind(this);
		this.handleChoiceBChange = this.handleChoiceBChange.bind(this);
		this.handleChoiceCChange = this.handleChoiceCChange.bind(this);
		this.handleChoiceDChange = this.handleChoiceDChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e){
		fetch('http://www.localhost:3001/game/addQuestions',{
			method:'POST',
			headers:{
				"Content-Type":"application/json"
			},
				body:JSON.stringify(this.state)
			})
			.catch(function(error){
				console.log('Request failure: ',error);
		});
		this.setState({
			prompt: 'Successfully added!'
		})
		this.forceUpdate();
	}

	handleCategoryChange(e){
		this.setState({
			category: e.target.value
		})
	}

	handleDifficultyChange(e){
		this.setState({
			difficulty: e.target.value
		})
	}

	handleTypeChange(e){
		this.setState({
			type: e.target.value
		})
		if (e.target.value === "True or False"){
			console.log("In here");
			this.setState({
				choiceA: "True",
				choiceB: "False"
			})
		}
	}

	handleQuestionChange(e){
		this.setState({
			question: e.target.value
		})
	}

	handleAnswerChange(e){
		this.setState({
			answer: e.target.value
		})
	}

	handleChoiceAChange(e){
		this.setState({
			choiceA: e.target.value
		})
	}

	handleChoiceBChange(e){
		this.setState({
			choiceB: e.target.value
		})
	}

	handleChoiceCChange(e){
		this.setState({
			choiceC: e.target.value
		})
	}

	handleChoiceDChange(e){
		this.setState({
			choiceD: e.target.value
		})
	}


	render(){
		return(
			<div className="App">
		        <div className="container">
		           <h1>Add Questions</h1>

		            <div className="quizArea">
		                <div className="quizHeader">
		                	<select className="dropdown" onChange={this.handleTypeChange}>
			                	<option selected disabled> Type </option>
			                	<option value="Multiple Choice"> Multiple Choice </option>
			                	<option value="True or False"> True or False </option>
			                	<option value="Identification"> Identification </option>
			                	<option value="Number"> Number </option>
		                	</select>

		                	<input onChange={this.handleCategoryChange} className="inputField" type="text" id="name" name="name" placeholder="Category"/>
		                	<input onChange={this.handleDifficultyChange} className="inputField" type="text" id="name" name="name" placeholder="Difficulty"/>
		                	<input onChange={this.handleQuestionChange} className="inputField" type="text" id="name" name="name" placeholder="Question"/>
		                	<input onChange={this.handleAnswerChange} className="inputField" type="text" id="name" name="name" placeholder="Answer"/>
		                	{showField(this.state.type)}
							<input onClick={this.handleSubmit} type="button" className="submit" value="Submit"/>

							<p className="prompt">{this.state.prompt}</p>
							<a className="home-btn" href="/">Back</a>
		                </div>
		            </div>
		        </div>
		    </div>
		);
	}
}

export default Add;
