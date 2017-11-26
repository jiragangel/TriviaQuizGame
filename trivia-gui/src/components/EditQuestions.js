import React, { Component } from 'react';


class View extends Component{
	constructor(props){
   		super(props);

    	this.state = {
    		newq: '',
    		newdiff:'',
    		newtype:'',
    		newans:'',
    		newa:'',
    		newb:'',
    		newc:'',
    		newd:'',
    		category: '',
    		question:'',
    		categories: [],
    		questions: [{
    			Category: "",
    			Difficulty:"",
    			Question:"",
    			Answer:"",
    			choiceA:"",
    			choiceB:"",
    			choiceC:"",
    			choiceD:""
    		}],
    		prompt: '',
    		choice: '',
    		promptClick: ''

    	}

    	this.handleChange = this.handleChange.bind(this);
    	this.handleQuesChange = this.handleQuesChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
    	this.updateQues = this.updateQues.bind(this);
    	this.updateAns = this.updateAns.bind(this);
    	this.updateA= this.updateA.bind(this);
    	this.updateB= this.updateB.bind(this);
    	this.updateC= this.updateC.bind(this);
    	this.updateD= this.updateD.bind(this);
			this.updateDiff= this.updateDiff.bind(this);
			this.updateType= this.updateType.bind(this);
	}


	  componentDidMount = () => {
	    fetch(`http://localhost:3001/game/showCategories`)
	    .then((response) => { return response.json() })
	    .then((result) => {
	      console.log(result);
	      this.setState({
	        categories: result
	      })
	    }).catch((e) => {console.log(e)});
	    fetch(`http://localhost:3001/game/showQuestions`)
	    .then((response) => { return response.json() })
	    .then((result) => {
	      console.log(result);
	      this.setState({
	        questions: result
	      })
	    }).catch((e) => {console.log(e)});
	  }



	handleSubmit(e){
		fetch('http://www.localhost:3001/game/editQuestions',{
			method:'POST',
			headers:{
				"Content-Type":"application/json"
			},
				body:JSON.stringify(this.state)
			})
			.catch(function(error){
				console.log('Request failure: ',error);
		});
			this.setState({
			prompt: 'Successfully Edited!'
		})
		this.forceUpdate();
	}

	handleChange(e){
		this.setState({
			category: e.target.value
		})
	}

	handleQuesChange(e){
		this.setState({
			question: e.target.value,
			newq: e.target.value
		})
	}

	updateQues(e){
		this.setState({
			newq: e.target.value
		})
	}
	updateAns(e){
		this.setState({
			newans: e.target.value
		})
	}
	updateA(e){
		this.setState({
			newa: e.target.value
		})
	}
	updateB(e){
		this.setState({
			newb: e.target.value
		})
	}
	updateC(e){
		this.setState({
			newc: e.target.value
		})
	}
	updateD(e){
		this.setState({
			newd: e.target.value
		})
	}

	updateDiff(e){
		this.setState({
			newdiff: e.target.value
		})
	}


	updateType(e){
		this.setState({
			newtype: e.target.value
		})
	}

	render(){
		return(
			<div className="App">
		        <div className="container">
		           <h1>Edit Questions</h1>
		           		<h4>Choose Category</h4>
		           		<select className = "dropdown" onChange={this.handleChange} value={this.state.category}>
							<option selected disabled value="Categories">Categories</option>
							{this.state.categories.map(
								(item)=> {
									return(<option value={item}>{item}</option>);
								}
			              )}
						</select>
						<h4>Choose Question</h4>
						<select className = "dropdown" onChange={this.handleQuesChange} value={this.state.question}>
							<option selected disabled value="questions">Questions</option>
							{this.state.questions.map(
								(newitem)=> {
									if(this.state.category===newitem.Category){
									return(
										<option value={newitem.Question}>{newitem.Question}</option>
										);
									}else{
										return 0;
									}
								}
			              )}
						</select>
						{this.state.questions.map((check)=>{
							if(check.Question===this.state.question){
								return(
									<div>
										<h4 id="top">Question:</h4>
										<input onChange={this.updateQues} className="inputField" type="text" id="field2" name="name" value={this.state.newq}/>
										<h4>Difficulty:</h4>
										<select className="dropdown" id="dd1" onChange={this.updateDiff}>
											<option selected disabled> Difficulty </option>
											<option value="Easy"> Easy </option>
											<option value="Medium"> Medium </option>
											<option value="Difficult"> Difficult </option>
										</select>
										<h4>Type:</h4>
										<select className="dropdown" id="dd1" onChange={this.updateType}>
											<option selected disabled> Type </option>
											<option value="Multiple Choice"> Multiple Choice </option>
											<option value="True or False"> True or False </option>
											<option value="Identification"> Identification </option>
											<option value="Number"> Number </option>
										</select>
										<h4>Answer:</h4>
										<input onChange={this.updateAns} className="field1" type="text" id="name" name="name" placeholder={check.Answer}/>
										<h4>Choice A:</h4>
										<input onChange={this.updateA} className="field1" type="text" id="name" name="name" placeholder={check.choiceA}/>
										<h4>Choice B:</h4>
										<input onChange={this.updateB} className="inputField" type="text" id="name" name="name" placeholder={check.choiceB}/>
										<h4>Choice C:</h4>
										<input onChange={this.updateC} className="inputField" type="text" id="name" name="name" placeholder={check.choiceC}/>
										<h4>Choice D:</h4>
										<input onChange={this.updateD} className="inputField" type="text" id="name" name="name" placeholder={check.choiceD}/>
									</div>
									)

							}else{
								return 0;
							}
						})}

						<input onClick={this.handleSubmit} type="button" className="submit" value="Submit"/>
						<p className="prompt">{this.state.prompt}</p>
		            <a className="home-btn" href="/manage">Back</a>
		        </div>
		    </div>
		);
	}
}

export default View;
