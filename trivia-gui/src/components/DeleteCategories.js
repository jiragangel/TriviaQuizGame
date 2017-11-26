import React, { Component } from 'react';


class View extends Component{
	constructor(props){
   		super(props);

    	this.state = {
    		category: 'Math',
    		categories: [],
    		prompt: ''
    	}

    	this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);

	}


	  componentDidMount = () => {
	    fetch(`http://localhost:3001/game/showCategories`)
	    .then((response) => { return response.json() })
	    .then((result) => {
	      this.setState({
	        categories: result
	      })
	    }).catch((e) => {console.log(e)});
	  }

	  handleButtonChange(e){
		this.setState({
			category: e.target.value
		})
	}

	handleSubmit(e){
		fetch('http://www.localhost:3001/game/deleteCategories',{
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
			prompt: 'Successfully deleted!'
		})
		this.forceUpdate();
	}

	handleChange(e){
		this.setState({
			category: e.target.value
		})
	}

	render(){
		return(
			<div className="App">
		        <div className="container">
		           <h1>Delete Categories</h1>
		           		<select className = "dropdown" onChange={this.handleChange} value={this.state.category}>
									<option selected disabled value="Categories">Categories</option>
							{this.state.categories.map(
								(item)=> {
									return(<option value={item}>{item}</option>);
								}
			              )}
						</select>
						<input onClick={this.handleSubmit} type="button" className="submit" value="Submit"/>
						<p className="prompt">{this.state.prompt}</p>
		            <a className="home-btn" href="/manage">Back</a>
		        </div>
		    </div>
		);
	}
}

export default View;
