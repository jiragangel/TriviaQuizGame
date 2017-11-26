import React, { Component } from 'react';

class CONGRATS extends Component{
  render(){
		return(
			<div className="App">
				<div className="container">
					<h1 className="thanks">THANK YOU FOR PLAYING!</h1>
          			<a href='/HighScore' className="submit">SEE HIGH SCORES</a>
				</div>
			</div>
		)
	}
}

export default CONGRATS;
