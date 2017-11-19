import React, { Component } from 'react';

class Grade extends Component{
	render(){
		return(
			<div className="App">
		        <body className="container">
		           <h1>Result</h1>
		                <div class="grade">
		                    15/15
		                </div>
		                <form action="">
		                	<input type="text" id="name" name="name" placeholder="Enter name" />
		                </form>
		                <a class="submit" href="/highscore">Submit</a>
		        </body>
		    </div>
		);
	}
}

export default Grade;