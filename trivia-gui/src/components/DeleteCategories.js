import React, { Component } from 'react';


class View extends Component{
	constructor(props){
   		super(props);

    	this.state = {
    		category: '',
    		categories: []
    	}

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

	  handleButtonChange(e){
		this.setState({
			category: e.target.value
		})
	}

	render(){
		return(
			<div className="App">
		        <div className="container">
		           <h2>DELETE CATEGORIES</h2>
		           		<select className = "dropdown" onChange={this.props.handleButtonChange} value={this.state.category}>
							<option selected disabled value="Categories">Categories</option>
							{this.state.categories.map(
								(item)=> {
									return(<option value={item}>{item}</option>);
								}
			              )}
						</select>
		            <a className="home-btn" href="/manage">Back</a>
		        </div>
		    </div>
		);
	}
}

export default View;
