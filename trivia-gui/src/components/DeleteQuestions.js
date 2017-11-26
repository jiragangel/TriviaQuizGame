import React, { Component } from 'react';


class View extends Component{
	constructor(props){
   		super(props);

    	this.state = {
    		category: '',
    		question:'',
    		categories: [],
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
    		prompt: '',
    		promptClick: ''

    	}

    	this.handleChange = this.handleChange.bind(this);
    	this.handleQuesChange = this.handleQuesChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);

	}


	  componentDidMount = () => {
	    fetch(`http://localhost:3001/game/showCategories`)
	    .then((response) => { return response.json() })
	    .then((result) => {
	      console.log(result);
	      this.setState({
	        categories: result
	      })
	    }).catch((e) => {console.log(e)});
	    fetch(`http://localhost:3001/game/showQuestions`)
	    .then((response) => { return response.json() })
	    .then((result) => {
	      console.log(result);
	      this.setState({
	        questions: result
	      })
	    }).catch((e) => {console.log(e)});
	  }



	handleSubmit(e){
		fetch('http://www.localhost:3001/game/deleteQuestions',{
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
			prompt: 'Successfully Deleted!'
		})
		this.forceUpdate();
	}

	handleChange(e){
		this.setState({
			category: e.target.value
		})
	}

	handleQuesChange(e){
		this.setState({
			question: e.target.value,
			promptClick: 'Question is chosen'
		})
	}

	render(){
		return(
			<div className="App">
		        <div className="container">
		           <h2>DELETE QUESTIONS</h2>
		           		<select className = "dropdown" onChange={this.handleChange} value={this.state.category}>
							<option selected disabled value="Categories">Categories</option>
							{this.state.categories.map(
								(item)=> {
									return(<option value={item}>{item}</option>);
								}
			              )}
						</select>
						<p className="prompt">{this.state.promptClick}</p>
						{this.state.questions.map(
							(qs)=>{
								if(qs.Category === this.state.category){
									return(
									<div>
									<input type="button" onClick={this.handleQuesChange} value={qs.Question} className="submit"/>
									<br/>
									</div>
									);
								}else {
									return(
										<div>
										</div>
									)
								}
						})}
						<input onClick={this.handleSubmit} type="button" className="submit" value="Submit"/>
						<p className="prompt">{this.state.prompt}</p>
		            <a className="home-btn" href="/manage">Back</a>
		        </div>
		    </div>
		);
	}
}

export default View;
