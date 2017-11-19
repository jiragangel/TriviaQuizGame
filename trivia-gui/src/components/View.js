import React, { Component } from 'react';

class View extends Component{
	render(){
		return(
			<div className="App">
		        <body className="container">
		           <h1>Questions</h1>
		                <div className="question-text">
		                	<p>1. How are you?</p>
		                	<div className="choices-text">
		                		<p>a. Okay lang.</p>
		                		<p>b. Haa</p>
		                		<p>c. Aucoe na.</p>
		                		<p>d. Meep.</p>
		                	</div>
		                </div>
		                <div className="question-text">
		                	<p>2. How are you?</p>
		                	<div className="choices-text">
		                		<p>a. Okay lang.</p>
		                		<p>b. Haa</p>
		                		<p>c. Aucoe na.</p>
		                		<p>d. Meep.</p>
		                	</div>
		                </div>
		                <div className="question-text">
		                	<p>3. How are you?</p>
		                	<div className="choices-text">
		                		<p>a. Okay lang.</p>
		                		<p>b. Haa</p>
		                		<p>c. Aucoe na.</p>
		                		<p>d. Meep.</p>
		                	</div>
		                </div>
		            <a class="home-btn" href="/manage">Back</a>
		        </body>
		    </div>
		);
	}
}

export default View;
