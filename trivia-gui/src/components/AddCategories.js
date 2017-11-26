import React, { Component } from 'react';
import autoBind from 'react-autobind';

class AddCategories extends Component{
	constructor(props){
   		super(props);
			autoBind(this);
    	this.state = {
    		questions: [{
				category: '',
				difficulty: 'Easy',
				type: 'Multiple Choice',
				question: '',
				answer: '',
				choiceA: '',
				choiceB: '',
				choiceC: '',
				choiceD: '',
				prompt: ''
			},
			{
				category: '',
				difficulty: 'Medium',
				type: 'Number',
				question: '',
				answer: '',
				choiceA: '',
				choiceB: '',
				choiceC: '',
				choiceD: '',
				prompt: ''
			},
			{
				category: '',
				difficulty: 'Difficult',
				type: 'Identification',
				question: '',
				answer: '',
				choiceA: '',
				choiceB: '',
				choiceC: '',
				choiceD: '',
				prompt: ''
			}]
		}
	}

	showField(type,difficulty){
		if (difficulty === 0){
			if (type === "Multiple Choice"){
			return(
				<div>
					<input onChange={this.handleEasyChoiceAChange} className="inputField" type="text" id="name" name="name" placeholder="Choice A"/>
					<input onChange={this.handleEasyChoiceBChange} className="inputField" type="text" id="name" name="name" placeholder="Choice B"/>
					<input onChange={this.handleEasyChoiceCChange} className="inputField" type="text" id="name" name="name" placeholder="Choice C"/>
					<input onChange={this.handleEasyChoiceDChange} className="inputField" type="text" id="name" name="name" placeholder="Choice D"/>
				</div>
			)
			}else{
				return (
					<div>
					</div>
				)
			}
		}else if(difficulty === 1){
			if (type === "Multiple Choice"){
			return(
				<div>
					<input onChange={this.handleAverageChoiceAChange} className="inputField" type="text" id="name" name="name" placeholder="Choice A"/>
					<input onChange={this.handleAverageChoiceBChange} className="inputField" type="text" id="name" name="name" placeholder="Choice B"/>
					<input onChange={this.handleAverageChoiceCChange} className="inputField" type="text" id="name" name="name" placeholder="Choice C"/>
					<input onChange={this.handleAverageChoiceDChange} className="inputField" type="text" id="name" name="name" placeholder="Choice D"/>
				</div>
			)
			}else{
				return (
					<div>
					</div>
				)
			}
		}else{
			if (type === "Multiple Choice"){
			return(
				<div>
					<input onChange={this.handleDifficultChoiceAChange} className="inputField" type="text" id="name" name="name" placeholder="Choice A"/>
					<input onChange={this.handleDifficultChoiceBChange} className="inputField" type="text" id="name" name="name" placeholder="Choice B"/>
					<input onChange={this.handleDifficultChoiceCChange} className="inputField" type="text" id="name" name="name" placeholder="Choice C"/>
					<input onChange={this.handleDifficultChoiceDChange} className="inputField" type="text" id="name" name="name" placeholder="Choice D"/>
				</div>
			)
			}else{
				return (
					<div>
					</div>
				)
			}
		}
	}

	handleSubmit(e){
		fetch('http://www.localhost:3001/game/addMultipleQuestions',{
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
		let ques = this.state.questions.slice(); //copy the array
		ques[0].category = e.target.value; //execute the manipulations
		ques[1].category = e.target.value; //execute the manipulations
		ques[2].category = e.target.value; //execute the manipulations
		this.setState({questions: ques}) //set the new state
	}

	handleEasyTypeChange(e){
		let ques = this.state.questions.slice(); //copy the array
		ques[0].type = e.target.value; //execute the manipulations
		this.setState({questions: ques}) //set the new state

		if (e.target.value === "True or False"){
			let ques = this.state.questions.slice(); //copy the array
			ques[0].choiceA = "True";
			ques[0].choiceB = "False";
			ques[0].choiceC = "";
			ques[0].choiceD = "";
			this.setState({questions: ques}) //set the new state
		}else {
			let ques = this.state.questions.slice(); //copy the array
			ques[0].choiceA = "";
			ques[0].choiceB = "";
			ques[0].choiceC = "";
			ques[0].choiceD = "";
			this.setState({questions: ques}) //set the new state
		}
	}

	handleEasyQuestionChange(e){
		let ques = this.state.questions.slice(); //copy the array
		ques[0].question = e.target.value; //execute the manipulations
		this.setState({questions: ques}) //set the new state
	}

	handleEasyAnswerChange(e){
		let ques = this.state.questions.slice(); //copy the array
		ques[0].answer = e.target.value; //execute the manipulations
		this.setState({questions: ques}) //set the new state
	}

	handleEasyChoiceAChange(e){
		let ques = this.state.questions.slice(); //copy the array
		ques[0].choiceA = e.target.value; //execute the manipulations
		this.setState({questions: ques}) //set the new state
	}

	handleEasyChoiceBChange(e){
		let ques = this.state.questions.slice(); //copy the array
		ques[0].choiceB = e.target.value; //execute the manipulations
		this.setState({questions: ques}) //set the new state
	}

	handleEasyChoiceCChange(e){
		let ques = this.state.questions.slice(); //copy the array
		ques[0].choiceC = e.target.value; //execute the manipulations
		this.setState({questions: ques}) //set the new state
	}

	handleEasyChoiceDChange(e){
		let ques = this.state.questions.slice(); //copy the array
		ques[0].choiceD = e.target.value; //execute the manipulations
		this.setState({questions: ques}) //set the new state
	}

	handleAverageTypeChange(e){
		let ques = this.state.questions.slice(); //copy the array
		ques[1].type = e.target.value; //execute the manipulations
		this.setState({questions: ques}) //set the new state

		if (e.target.value === "True or False"){
			let ques = this.state.questions.slice(); //copy the array
			ques[1].choiceA = "True";
			ques[1].choiceB = "False";
			ques[1].choiceC = "";
			ques[1].choiceD = "";
			this.setState({questions: ques}) //set the new state
		}else {
			let ques = this.state.questions.slice(); //copy the array
			ques[1].choiceA = "";
			ques[1].choiceB = "";
			ques[1].choiceC = "";
			ques[1].choiceD = "";
			this.setState({questions: ques}) //set the new state
		}
	}

	handleAverageQuestionChange(e){
		let ques = this.state.questions.slice(); //copy the array
		ques[1].question = e.target.value; //execute the manipulations
		this.setState({questions: ques}) //set the new state
	}

	handleAverageAnswerChange(e){
		let ques = this.state.questions.slice(); //copy the array
		ques[1].answer = e.target.value; //execute the manipulations
		this.setState({questions: ques}) //set the new state
	}

	handleAverageChoiceAChange(e){
		let ques = this.state.questions.slice(); //copy the array
		ques[1].choiceA = e.target.value; //execute the manipulations
		this.setState({questions: ques}) //set the new state
	}

	handleAverageChoiceBChange(e){
		let ques = this.state.questions.slice(); //copy the array
		ques[1].choiceB = e.target.value; //execute the manipulations
		this.setState({questions: ques}) //set the new state
	}

	handleAverageChoiceCChange(e){
		let ques = this.state.questions.slice(); //copy the array
		ques[1].choiceC = e.target.value; //execute the manipulations
		this.setState({questions: ques}) //set the new state
	}

	handleAverageChoiceDChange(e){
		let ques = this.state.questions.slice(); //copy the array
		ques[1].choiceD = e.target.value; //execute the manipulations
		this.setState({questions: ques}) //set the new state
	}

	handleDifficultTypeChange(e){
		let ques = this.state.questions.slice(); //copy the array
		ques[2].type = e.target.value; //execute the manipulations
		this.setState({questions: ques}) //set the new state

		if (e.target.value === "True or False"){
			let ques = this.state.questions.slice(); //copy the array
			ques[2].choiceA = "True";
			ques[2].choiceB = "False";
			ques[2].choiceC = "";
			ques[2].choiceD = "";
			this.setState({questions: ques}) //set the new state
		}else {
			let ques = this.state.questions.slice(); //copy the array
			ques[2].choiceA = "";
			ques[2].choiceB = "";
			ques[2].choiceC = "";
			ques[2].choiceD = "";
			this.setState({questions: ques}) //set the new state
		}
	}

	handleDifficultQuestionChange(e){
		let ques = this.state.questions.slice(); //copy the array
		ques[2].question = e.target.value; //execute the manipulations
		this.setState({questions: ques}) //set the new state
	}

	handleDifficultAnswerChange(e){
		let ques = this.state.questions.slice(); //copy the array
		ques[2].answer = e.target.value; //execute the manipulations
		this.setState({questions: ques}) //set the new state
	}
<<<<<<< HEAD
=======

	handleDifficultChoiceAChange(e){
		let ques = this.state.questions.slice(); //copy the array
		ques[2].choiceA = e.target.value; //execute the manipulations
		this.setState({questions: ques}) //set the new state
	}

	handleDifficultChoiceBChange(e){
		let ques = this.state.questions.slice(); //copy the array
		ques[2].choiceB = e.target.value; //execute the manipulations
		this.setState({questions: ques}) //set the new state
	}

	handleDifficultChoiceCChange(e){
		let ques = this.state.questions.slice(); //copy the array
		ques[2].choiceC = e.target.value; //execute the manipulations
		this.setState({questions: ques}) //set the new state
	}

	handleDifficultChoiceDChange(e){
		let ques = this.state.questions.slice(); //copy the array
		ques[2].choiceD = e.target.value; //execute the manipulations
		this.setState({questions: ques}) //set the new state
	}
>>>>>>> 531fa4386abed57b635de100a3104160652d87b7

	render(){
		return(
			<div className="App">
				<div className="container">
					<h1>Add Category</h1>
					<h5>To add a new category, at least one question per difficulty should be added.</h5>
					<input onChange={this.handleCategoryChange} className="inputField" type="text" id="name" name="name" placeholder="Category"/>
					<h6>Easy</h6>

					<select className="dropdown" onChange={this.handleEasyTypeChange}>
						<option selected disabled> Type </option>
						<option value="Multiple Choice"> Multiple Choice </option>
						<option value="True or False"> True or False </option>
						<option value="Identification"> Identification </option>
						<option value="Number"> Number </option>
					</select>

					<input onChange={this.handleEasyQuestionChange} className="inputField" type="text" id="name" name="name" placeholder="Question"/>
					<input onChange={this.handleEasyAnswerChange} className="inputField" type="text" id="name" name="name" placeholder="Answer"/>

					{this.showField(this.state.questions[0].type,0)}

					<h6>Medium</h6>

					<select className="dropdown" onChange={this.handleAverageTypeChange}>
						<option selected disabled> Type </option>
						<option value="Multiple Choice"> Multiple Choice </option>
						<option value="True or False"> True or False </option>
						<option value="Identification"> Identification </option>
						<option value="Number"> Number </option>
					</select>

					<input onChange={this.handleAverageQuestionChange} className="inputField" type="text" id="name" name="name" placeholder="Question"/>
					<input onChange={this.handleAverageAnswerChange} className="inputField" type="text" id="name" name="name" placeholder="Answer"/>

					{this.showField(this.state.questions[1].type,1)}

					<h6>Difficult</h6>

					<select className="dropdown" onChange={this.handleDifficultTypeChange}>
						<option selected disabled> Type </option>
						<option value="Multiple Choice"> Multiple Choice </option>
						<option value="True or False"> True or False </option>
						<option value="Identification"> Identification </option>
						<option value="Number"> Number </option>
					</select>

					<input onChange={this.handleDifficultQuestionChange} className="inputField" type="text" id="name" name="name" placeholder="Question"/>
					<input onChange={this.handleDifficultAnswerChange} className="inputField" type="text" id="name" name="name" placeholder="Answer"/>

					{this.showField(this.state.questions[2].type,2)}

					<input onClick={this.handleSubmit} type="button" className="submit" value="Submit"/>
					<p className="prompt">{this.state.prompt}</p>
					<a className="home-btn" href="/manage/">Back</a>
				</div>
			</div>
		);
	}
}

export default AddCategories;
