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
	    fetch(`http://localhost:3001/game/showQuestions`)
	    .then((response) => { return response.json() })
	    .then((result) => {
	      console.log(result);
	      this.setState({
	        questions: result
	      })
	    }).catch((e) => {console.log(e)});
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

	render(){
		return(
			<div className="App">
		        <body className="container">
		           <h1>Questions</h1>
		             {this.state.categories.map((cmp)=>{
		             	return(
		             		<h1>{cmp}</h1>
			             	{this.state.questions.map((item)=>{
			              		if(item.Category===cmp){
			              			return(
			             				<p>{item.Question}</p>
			              			)
			              		}
			              	})}
		              	)
		              })}
		            <a class="home-btn" href="/manage">Back</a>
		        </body>
		    </div>
		);
	}
}

export default View;
