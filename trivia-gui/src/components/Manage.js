import React, { Component } from 'react';

class Manage extends Component{
	render(){
		return(
			<div className="App">
		        <body className="container">
		        	<div className="manage">
			            <h3>Questions</h3>
		                <a className="manage-btn" href="/">View/Edit</a>
		                <a className="manage-btn" href="/">Add</a>
		                <a className="manage-btn" href="/">Delete</a>
		            </div>
		            <div className="manage">
			            <h3>Categories</h3>
		                <a className="manage-btn" href="/">View/Edit</a>
		                <a className="manage-btn" href="/">Add</a>
		                <a className="manage-btn" href="/">Delete</a>
		            </div>
		            <a class="home-btn" href="/">Back</a>
		        </body>
		    </div>
		);
	}
}

export default Manage;