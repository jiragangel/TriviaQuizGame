import React, { Component } from 'react';

class Highscore extends Component{
	render(){
		return(
			<div className="App">
		        <body className="container">
		           <h1 class="quizName">High Scores</h1>
		           		<div className="tables">
		           			<div className="tCategory">Entertainment</div>
			            	<table>

								<tr>
									<th>Name</th>
							 		<th>Score</th>
							  	</tr>
							  	<tr>
								    <td>Pusheen</td>
								    <td>94</td>
							  	</tr>
							  	<tr>
								    <td>Woem</td>
								    <td>99</td>
								</tr>
							</table>
						</div>
						<div className="tables">
		           			<div className="tCategory">Sports</div>
			            	<table>

								<tr>
									<th>Name</th>
							 		<th>Score</th>
							  	</tr>
							  	<tr>
								    <td>Pusheen</td>
								    <td>94</td>
							  	</tr>
							  	<tr>
								    <td>Woem</td>
								    <td>99</td>
								</tr>
							</table>

						</div>
						<div className="tables">
		           			<div className="tCategory">History</div>
			            	<table>

								<tr>
									<th>Name</th>
							 		<th>Score</th>
							  	</tr>
							  	<tr>
								    <td>Pusheen</td>
								    <td>94</td>
							  	</tr>
							  	<tr>
								    <td>Woem</td>
								    <td>99</td>
								</tr>
							</table>

						</div>
						<div className="tables">
		           			<div className="tCategory">Science</div>
			            	<table>

								<tr>
									<th>Name</th>
							 		<th>Score</th>
							  	</tr>
							  	<tr>
								    <td>Pusheen</td>
								    <td>94</td>
							  	</tr>
							  	<tr>
								    <td>Woem</td>
								    <td>99</td>
								</tr>
							</table>

						</div>
						<div className="tables">
		           			<div className="tCategory">Geography</div>
			            	<table>

								<tr>
									<th>Name</th>
							 		<th>Score</th>
							  	</tr>
							  	<tr>
								    <td>Pusheen</td>
								    <td>94</td>
							  	</tr>
							  	<tr>
								    <td>Woem</td>
								    <td>99</td>
								</tr>
							</table>
						</div>
						<a class="button" href="/">Back to Home</a>
		        </body>
		    </div>
		);
	}
}

export default Highscore;