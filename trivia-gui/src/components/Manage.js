import React, { Component } from 'react';

class Manage extends Component{
	render(){
		return(
			<div className="App">
		        <div className="container">
		        	<div className="manage">
			            <h3>Questions</h3>
		                <a className="manage-btn" href="/">View</a>
		                <a className="manage-btn" href="/manage/add">Add</a>
		                <a className="manage-btn" href="/">Edit/Delete</a>
		            </div>
		            <div className="manage">
			            <h3>Categories</h3>
		                <a className="manage-btn" href="/manage/view">View</a>
		                <a className="manage-btn" href="/">Add</a>
		                <a className="manage-btn" href="/">Edit/Delete</a>
		            </div>
		            <a className="home-btn" href="/">Back</a>
		        </div>
		    </div>
		);
	}
}

export default Manage;