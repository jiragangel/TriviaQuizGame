import React, { Component } from 'react';
import  { Redirect } from 'react-router-dom'

class Grade extends Component{
	constructor(props){
		super(props);

		this.state = {
			score: this.props.match.params.score,
			total: this.props.match.params.total,
			name: '',
			redirect: false,
			hs:[],
			todelete: ''
		}

		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount(e){
		fetch(`http://localhost:3001/game/showHighScores`)
		.then((response) => { return response.json() })
		.then((result) => {
			console.log(result);
			this.setState({
				hs: result
			})
		}).catch((e) => {console.log(e)});
	}

	handleSubmit(e){
		if ( this.state.hs[this.state.hs.length-1] < this.state.score ){
			this.setState({
				todelete: this.state.hs.Name
			})
		}
			fetch('http://www.localhost:3001/game/addhs',{
				method:'POST',
				headers:{
					"Content-Type":"application/json"
				},
					body:JSON.stringify(this.state)
				})
				.then(function (data){
					console.log('Request success',data);
				})
				.catch(function(error){
					console.log('Request failure: ',error);
			});
		this.setState({
			redirect: true
		})

		this.forceUpdate();
	}

	handleNameChange(e){
		this.setState({
			name: e.target.value
		})
	}

	render(){
		if (this.state.redirect){
			return (<Redirect to={`/HighScore`} />)
		}else{
			return(
				<div className="App">
					<div className="container">
						<h1>Result</h1>
						<div className="grade">
							{this.state.score}/{this.state.total}
						</div>
						<form action="">
							<input onChange={this.handleNameChange} type="text" id="name" name="name" placeholder="Enter name"/>
							<input onClick={this.handleSubmit} type="button" className="submit" value="Submit"/>
						</form>
					</div>
				</div>
			);
		}
	}
}

export default Grade;
