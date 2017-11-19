import React, { Component } from 'react';

class Quiz extends Component{
	render(){
		return(
			<form action="">
				<div className="App">
			        <body className="container">
			            <h1 className="quizName"></h1>
			            <div className="quizArea">
			                <div className="quizHeader">
			                	<h2 className="itemNo">1</h2>
			                	<div className="question">Hello</div>
			                	<div className="choices">
				                	<input type="radio" name="A" value="a" />     A. Hi
				                </div>
				                <div className="choices">
				                	<input type="radio" name="A" value="c" />     C. Hi
				                </div>
				                <div className="choices">
				                	<input type="radio" name="A" value="b" />     B. Hi
				                </div>
				                <div className="choices">
				                	<input type="radio" name="A" value="d" />     D. Hi
				                </div>

			                </div>
			            </div>
			        </body>
			    </div>
		    </form>
		);
	}
}

export default Quiz;
