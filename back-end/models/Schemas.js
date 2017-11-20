const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionsSchema = new Schema({
  Category: String,
  Difficulty: String,
  Question: String,
  Answer: String,
  choiceA: String,
  choiceB: String,
  choiceC: String,
  choiceD: String
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

/*
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
  Entertainment: {
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
  }
});

const HSSchema = new Schema({
  Sports: {
      Name: {type: String, default: ''},
      Score: { type: Number, default: 0 }
  },
  Entertainment: {
    Name: {type: String, default: ''},
    Score: { type: Number, default: 0 }
  },
  Science: {
    Name: {type: String, default: ''},
    Score: { type: Number, default: 0 }
  },
  Geography: {
    Name: {type: String, default: ''},
    Score: { type: Number, default: 0 }
  },
  Histo: {
    Name: {type: String, default: ''},
    Score: { type: Number, default: 0 }
  }
});
*/
