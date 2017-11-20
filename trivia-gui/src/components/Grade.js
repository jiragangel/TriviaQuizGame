import React, { Component } from 'react';

class Grade extends Component{
	constructor(props){
		super(props);

		this.state = {
			score: this.props.match.params.score,
			total: this.props.match.params.total,
		}
	}

	render(){
		return(
			<div className="App">
		        <body className="container">
		           <h1>Result</h1>
		                <div class="grade">
		                    {this.state.score}/{this.state.total}
		                </div>
		                <form action="">
		                	<input type="text" id="name" name="name" placeholder="Enter name"/>
		                </form>
		                <a class="submit" href="/highscore">Submit</a>
		        </body>
		    </div>
		);
	}
}

export default Grade;
