import React, { Component } from 'react';


class View extends Component{
	constructor(props){
   		super(props);

    	this.state = {
    		category: '',
    		newctgry:'',
    		categories: [],
    		prompt: '',
    		choice: '',
    		promptClick: ''

    	}

    	this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
    	this.updateCtgry = this.updateCtgry.bind(this);
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
	  }



	handleSubmit(e){
		fetch('http://www.localhost:3001/game/editCategories',{
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
			prompt: 'Successfully Edited!'
		})
		this.forceUpdate();
	}

	handleChange(e){
		this.setState({
			category: e.target.value
		})
	}

	updateCtgry(e){
		this.setState({
			newctgry: e.target.value
		})
	}

	render(){
		return(
			<div className="App">
		        <div className="container">
		           <h2>EDIT QUESTIONS</h2>
		           		<h1>Choose Catefory</h1>
		           		<select className = "dropdown" onChange={this.handleChange} value={this.state.category}>
							<option selected disabled value="Categories">Categories</option>
							{this.state.categories.map(
								(item)=> {
									return(<option value={item}>{item}</option>);
								}
			              )}
						</select>

						{this.state.categories.map(
							(cat)=>{
								if(cat === this.state.category){
									return(
										<div>
										<h3>category:</h3>
										<input onChange={this.updateCtgry} className="inputField" type="text" id="name" name="name" placeholder={this.state.category}/>
										</div>
									)
								}else{
									return(<div></div>);
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
