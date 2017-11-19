/*
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionsSchema = new Schema({
  Category: String,
  Difficulty: [{
    Level: {type: String, default: ''},
    Questions: [{
      Question: {type: String, default: ''},
      Answer: { type: String, default: '' },
      choiceA: { type: String, default: '' },
      choiceB: { type: String, default: '' },
      choiceC: { type: String, default: '' },
      choiceD: { type: String, default: '' }
    }]
  }]
});

const HSSchema = new Schema({
  Category: {type: String, default: ''},
  Scorers: [{
    Name: { type: String, default: '' },
    Score: { type: Number, default: '' }
  }]
});

mongoose.model('Question', QuestionsSchema);
mongoose.model('HighScore', HSSchema);
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionsSchema = new Schema({
  Sports: {
    Easy: [{
      Question: {type: String, default: ''},
      Answer: { type: String, default: '' },
      choiceA: { type: String, default: '' },
      choiceB: { type: String, default: '' },
      choiceC: { type: String, default: '' },
      choiceD: { type: String, default: '' }
    }],
    Medium: [{
      Question: {type: String, default: ''},
      Answer: { type: String, default: '' },
      choiceA: { type: String, default: '' },
      choiceB: { type: String, default: '' },
      choiceC: { type: String, default: '' },
      choiceD: { type: String, default: '' }
    }],
    Hard: [{
      Question: {type: String, default: ''},
      Answer: { type: String, default: '' },
      choiceA: { type: String, default: '' },
      choiceB: { type: String, default: '' },
      choiceC: { type: String, default: '' },
      choiceD: { type: String, default: '' }
    }]
  },
  Arts: {
    Easy: [{
      Question: {type: String, default: ''},
      Answer: { type: String, default: '' },
      choiceA: { type: String, default: '' },
      choiceB: { type: String, default: '' },
      choiceC: { type: String, default: '' },
      choiceD: { type: String, default: '' }
    }],
    Medium: [{
      Question: {type: String, default: ''},
      Answer: { type: String, default: '' },
      choiceA: { type: String, default: '' },
      choiceB: { type: String, default: '' },
      choiceC: { type: String, default: '' },
      choiceD: { type: String, default: '' }
    }],
    Hard: [{
      Question: {type: String, default: ''},
      Answer: { type: String, default: '' },
      choiceA: { type: String, default: '' },
      choiceB: { type: String, default: '' },
      choiceC: { type: String, default: '' },
      choiceD: { type: String, default: '' }
    }]
  },
  Science: {
    Easy: [{
      Question: {type: String, default: ''},
      Answer: { type: String, default: '' },
      choiceA: { type: String, default: '' },
      choiceB: { type: String, default: '' },
      choiceC: { type: String, default: '' },
      choiceD: { type: String, default: '' }
    }],
    Medium: [{
      Question: {type: String, default: ''},
      Answer: { type: String, default: '' },
      choiceA: { type: String, default: '' },
      choiceB: { type: String, default: '' },
      choiceC: { type: String, default: '' },
      choiceD: { type: String, default: '' }
    }],
    Hard: [{
      Question: {type: String, default: ''},
      Answer: { type: String, default: '' },
      choiceA: { type: String, default: '' },
      choiceB: { type: String, default: '' },
      choiceC: { type: String, default: '' },
      choiceD: { type: String, default: '' }
    }]
  },
  Geography: {
    Easy: [{
      Question: {type: String, default: ''},
      Answer: { type: String, default: '' },
      choiceA: { type: String, default: '' },
      choiceB: { type: String, default: '' },
      choiceC: { type: String, default: '' },
      choiceD: { type: String, default: '' }
    }],
    Medium: [{
      Question: {type: String, default: ''},
      Answer: { type: String, default: '' },
      choiceA: { type: String, default: '' },
      choiceB: { type: String, default: '' },
      choiceC: { type: String, default: '' },
      choiceD: { type: String, default: '' }
    }],
    Hard: [{
      Question: {type: String, default: ''},
      Answer: { type: String, default: '' },
      choiceA: { type: String, default: '' },
      choiceB: { type: String, default: '' },
      choiceC: { type: String, default: '' },
      choiceD: { type: String, default: '' }
    }]
  },
  Histo: {
    Easy: [{
      Question: {type: String, default: ''},
      Answer: { type: String, default: '' },
      choiceA: { type: String, default: '' },
      choiceB: { type: String, default: '' },
      choiceC: { type: String, default: '' },
      choiceD: { type: String, default: '' }
    }],
    Medium: [{
      Question: {type: String, default: ''},
      Answer: { type: String, default: '' },
      choiceA: { type: String, default: '' },
      choiceB: { type: String, default: '' },
      choiceC: { type: String, default: '' },
      choiceD: { type: String, default: '' }
    }],
    Hard: [{
      Question: {type: String, default: ''},
      Answer: { type: String, default: '' },
      choiceA: { type: String, default: '' },
      choiceB: { type: String, default: '' },
      choiceC: { type: String, default: '' },
      choiceD: { type: String, default: '' }
    }]
  },
});

const HSSchema = new Schema({

});

mongoose.model('Question', QuestionsSchema);
mongoose.model('HighScore',HSSchema)
