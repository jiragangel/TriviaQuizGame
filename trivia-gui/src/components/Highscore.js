import React, { Component } from 'react';

class Highscore extends Component{
  constructor(props){
    super(props);

    this.state = {
      hs: [{
				Category: "",
				Name: "",
				Score: ""
			}]
		}
  }

	componentWillMount = () => {
    fetch(`http://localhost:3001/game/showHighScores`)
    .then((response) => { return response.json() })
    .then((result) => {
      console.log(result);
      this.setState({
        hs: result
      })
    }).catch((e) => {console.log(e)});
  }

	render(){
		return(
			<div className="App">
				<div className="container">
					<h1>High Scores</h1>
					<div className="tables">
							<table>
								<tbody>
								<tr>
									<th>Rank</th>
									<th>Name</th>
									<th>Score</th>
								</tr>
									{
										this.state.hs.map((scores) => {
											return(
												<tr key={this.state.hs.indexOf(scores)}>
												<td>{this.state.hs.indexOf(scores)+1}</td>
												<td>{scores.Name}</td>
												<td>{scores.Score}</td>
												</tr>
											)
										})
									}
									</tbody>
							</table>
					</div>
					<a className="home-btn" href="/">Back</a>
				</div>
			</div>
		)
	}
}

export default Highscore;
