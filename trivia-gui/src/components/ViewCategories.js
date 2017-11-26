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
		           <h1>Categories</h1>
		             {this.state.categories.map((cmp)=>{
			             	return(
		 									<div key={this.state.categories.indexOf(cmp)}>
				             		<h5>{cmp}</h5>
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
