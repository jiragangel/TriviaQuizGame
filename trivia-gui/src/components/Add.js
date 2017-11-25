import React, { Component } from 'react';

const showField = (type) => {
	if (type === "Multiple Choice"){
    	return <div>
    				<input onChange={this.handleChoiceAChange} className="inputField" type="text" id="name" name="name" placeholder="Choice A"/>
                	<input onChange={this.handleChoiceBChange} className="inputField" type="text" id="name" name="name" placeholder="Choice B"/>
                	<input onChange={this.handleChoiceCChange} className="inputField" type="text" id="name" name="name" placeholder="Choice C"/>
                	<input onChange={this.handleChoiceDChange} className="inputField" type="text" id="name" name="name" placeholder="Choice D"/>
    			</div>
	}else if (type === "True or False"){
		return <div>
    				<input onChange={this.handleChoiceAChange} className="inputField" type="text" id="name" name="name" placeholder="Choice A"/>
                	<input onChange={this.handleChoiceBChange} className="inputField" type="text" id="name" name="name" placeholder="Choice B"/>
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
			choiceD: ''
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
		console.log("State: " + this.state.todelete);
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
		            <div class="quizArea">
		                <div class="quizHeader">
<<<<<<< HEAD
		                	<select className="dropdown" onChange={this.handleTypeChange}>
			                	<option selected disabled> Type </option>
			                	<option value="Multiple Choice"> Multiple Choice </option>
			                	<option value="True or False"> True or False </option>
			                	<option value="Identification"> Identification </option>
			                	<option value="Number"> Number </option>
		                	</select>
=======
		                	<input onChange={this.handleNameChange} className="inputField" type="text" id="name" name="name" placeholder="Category"/>
		                	<input onChange={this.handleNameChange} className="inputField" type="text" id="name" name="name" placeholder="Difficulty"/>
		                	<input onChange={this.handleNameChange} className="inputField" type="text" id="name" name="name" placeholder="Type"/>
		                	<input onChange={this.handleNameChange} className="inputField" type="text" id="name" name="name" placeholder="Question"/>
		                	<input onChange={this.handleNameChange} className="inputField" type="text" id="name" name="name" placeholder="Answer"/>
		                	<input onChange={this.handleNameChange} className="inputField" type="text" id="name" name="name" placeholder="Choice A"/>
		                	<input onChange={this.handleNameChange} className="inputField" type="text" id="name" name="name" placeholder="Choice B"/>
		                	<input onChange={this.handleNameChange} className="inputField" type="text" id="name" name="name" placeholder="Choice C"/>
		                	<input onChange={this.handleNameChange} className="inputField" type="text" id="name" name="name" placeholder="Choice D"/>
											<input onClick={this.handleSubmit} type="button" className="submit" value="Submit"/>

>>>>>>> 4feee16ecc3a9a320a7fc40395f1abd4786a510b
		                	<input onChange={this.handleCategoryChange} className="inputField" type="text" id="name" name="name" placeholder="Category"/>
		                	<input onChange={this.handleDifficultyChange} className="inputField" type="text" id="name" name="name" placeholder="Difficulty"/>
		                	<input onChange={this.handleQuestionChange} className="inputField" type="text" id="name" name="name" placeholder="Question"/>
		                	<input onChange={this.handleAnswerChange} className="inputField" type="text" id="name" name="name" placeholder="Answer"/>
		                	{showField(this.state.type)}
							<input onClick={this.handleSubmit} type="button" className="submit" value="Submit"/>
		                </div>
		            </div>
		        </div>
		    </div>
		);
	}
}

export default Add;
