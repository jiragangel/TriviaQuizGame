import React, { Component } from 'react';

class Home extends Component{
	render(){
		return(
			<div className="App">
		        <body className="container">
		           <h1>Trivia Quiz</h1>
		            <div class="quizArea">
		                <div class="quizHeader">
		                    <a class="button" href="/">Start Game</a>
		                    <a class="button" href="/highscore">High Scores</a>
		                    <a class="button" href="/">Questions</a>
		                </div>
		            </div>
		        </body>
		    </div>
		);
	}
}

export default Home;