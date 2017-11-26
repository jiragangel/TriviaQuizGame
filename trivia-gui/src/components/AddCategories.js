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
		           <h1>CATEGORIES</h1>
							 <h4>To add a new category, it is a must to add at least one question under it.</h4>
								<a className="button" href='/manage/add'>Add A Question</a>
								<a className="home-btn" href="/manage/">Back</a>
						</div>
		    </div>
		);
	}
}

export default View;
