import React, { Component } from 'react';

class Add extends Component{
	constructor(props){
		super(props);

		this.state = {
			score: this.props.match.params.score,
			total: this.props.match.params.total,
			name: '',
			redirect: false,
			hs:[],
			todelete: ''
		}

		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	render(){
		return(
			<div className="App">
		        <div className="container">
		           <h1>Add Questions</h1>
		            <div class="quizArea">
		                <div class="quizHeader">
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
		                </div>
		            </div>
		        </div>
		    </div>
		);
	}
}

export default Add;
