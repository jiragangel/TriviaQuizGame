import React, { Component } from 'react';

class Home extends Component{
	render(){
		return(
			<div className="App">
		        <body className="container">
		           <h1>Trivia Quiz</h1>
		            <div className="quizArea">
		                <div className="quizHeader">
		                    <a className="button" id="center" href="/categories">Start Game</a>
		                    <a className="button" id="center" href="/HighScore">High Scores</a>
		                    <a className="button" id="center" href="/Manage">Manage</a>
		                </div>
		            </div>
		        </body>
		    </div>
		);
	}
}

export default Home;
