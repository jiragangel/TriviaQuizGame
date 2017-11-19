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
    Easy: [{
      Name: {type: String, default: ''},
      choiceA: { type: Number, default: 0 }
    }],
    Medium: [{
      Name: {type: String, default: ''},
      choiceA: { type: Number, default: 0 }
    }],
    Hard: [{
      Name: {type: String, default: ''},
      choiceA: { type: Number, default: 0 }
    }]
  },
  Entertainment: {
    Easy: [{
      Name: {type: String, default: ''},
      choiceA: { type: Number, default: 0 }
    }],
    Medium: [{
      Name: {type: String, default: ''},
      choiceA: { type: Number, default: 0 }
    }],
    Hard: [{
      Name: {type: String, default: ''},
      choiceA: { type: Number, default: 0 }
    }]
  },
  Science: {
    Easy: [{
      Name: {type: String, default: ''},
      choiceA: { type: Number, default: 0 }
    }],
    Medium: [{
      Name: {type: String, default: ''},
      choiceA: { type: Number, default: 0 }
    }],
    Hard: [{
      Name: {type: String, default: ''},
      choiceA: { type: Number, default: 0 }
    }]
  },
  Geography: {
    Easy: [{
      Name: {type: String, default: ''},
      choiceA: { type: Number, default: 0 }
    }],
    Medium: [{
      Name: {type: String, default: ''},
      choiceA: { type: Number, default: 0 }
    }],
    Hard: [{
      Name: {type: String, default: ''},
      choiceA: { type: Number, default: 0 }
    }]
  },
  Histo: {
    Easy: [{
      Name: {type: String, default: ''},
      choiceA: { type: Number, default: 0 }
    }],
    Medium: [{
      Name: {type: String, default: ''},
      choiceA: { type: Number, default: 0 }
    }],
    Hard: [{
      Name: {type: String, default: ''},
      choiceA: { type: Number, default: 0 }
    }]
  }
});

mongoose.model('Question', QuestionsSchema);
mongoose.model('HighScore',HSSchema)
