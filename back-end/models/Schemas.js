const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionsSchema = new Schema({
<<<<<<< HEAD
  Category: {type: String, default: ''},
  Difficulty: {
	Level: {type: String, default: ''},
  	Questions: {
      Question: {type: String, default: ''},
      Answer: { type: String, default: '' },
      choiceA: { type: String, default: '' },
      choiceB: { type: String, default: '' },
      choiceC: { type: String, default: '' },
      choiceD: { type: String, default: '' },
 	  }
  }
=======
	Category: {type: String, default: ''},
	Difficulty: {[ 
		{
		Level: {type: String, default: ''},
 		Questions: {[
			{
			Question: {type: String, default: ''},    
			Answer: { type: String, default: '' },
		   	choiceA: { type: String, default: '' },
		   	choiceB: { type: String, default: '' },
			choiceC: { type: String, default: '' },
		    	choiceD: { type: String, default: '' }
			}		
			]} 
	}
	]}
>>>>>>> d26ff8d2ad800d0a3a9019df1288de45229c49a0
});

const HSSchema = new Schema({
  Category: {type: String, default: ''},
  Scorers: {
    Name: { type: String, default: '' },
    Score: { type: Number, default: '' }
  }
});

mongoose.model('Questions', QuestionsSchema);
mongoose.model('HighScores', HSSchema);
