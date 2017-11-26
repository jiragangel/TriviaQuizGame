const Question = require('mongoose').model('Question');
const HighScore = require('mongoose').model('HighScore');

exports.showQuestions = (req, res) => {
  Question.find({},{}).exec(function(err, models) {
      if (err) {
          res.send('error', {
              status: 500
          });
      } else {
          res.send(models);
      }
  });
}

exports.showHighScores = (req, res) => {
  HighScore.find({},{}).sort({Score: -1}).exec(function(err, models) {
      if (err) {
          res.render('error', {
              status: 500
          });
      }else {
          res.send(models);
      }
  });
}

exports.deleteCategories = (req,res) => {
  Question.remove({ Category: req.body.category, multi: true }, (error, movie) => {
    if (!error) {
      res.send('Catogery Deleted');
    }else{
      res.send('Category Does not Exist');
    }
  });
}

exports.deleteQuestions = (req,res) => {
  Question.remove({ Question: req.body.question }, (error, movie) => {
    if (!error) {
      res.send('Question Deleted');
    }else{
      res.send('Question Does not Exist');
    }
  });
}

exports.showCategories = (req,res) => {
  Question.aggregate([ {"$group" : {_id:"$Category"}}]).exec(function(err, models){
    let array = [];
    for (let i = 0 ; i < models.length ; i++){
      array.push (models[i]._id);
    }
    res.send(array);
  });
}


exports.addhs = (req,res) => {
  HighScore.insertMany([{Name: req.body.name, Score: req.body.percentile, Categories: [req.body.one,req.body.two,req.body.three]}]);
  HighScore.remove({_id: req.body.todelete}).exec(function(err, models){
    if (!err) res.send("Not error");
  });
}

exports.addQuestions = (req,res) => {
  Question.insertMany([{Category: req.body.category, Difficulty: req.body.difficulty, Type: req.body.type, Question: req.body.question, Answer: req.body.answer, choiceA: req.body.choiceA, choiceB: req.body.choiceB, choiceC: req.body.choiceC, choiceD: req.body.choiceD}]);
}

exports.addCategories = (req, res) => {
  Question.insertMany([{Category: req.body.category, Difficulty: req.body.difficulty, Type: req.body.type, Question: req.body.question, Answer: req.body.answer, choiceA: req.body.choiceA, choiceB: req.body.choiceB, choiceC: req.body.choiceC, choiceD: req.body.choiceD}]);
}

exports.addMultipleQuestions = (req, res) => {
  Question.insertMany([
    {
      Category: req.body.questions[0].category,
      Difficulty: req.body.questions[0].difficulty,
      Type: req.body.questions[0].type,
      Question: req.body.questions[0].question,
      Answer: req.body.questions[0].answer,
      choiceA: req.body.questions[0].choiceA,
      choiceB: req.body.questions[0].choiceB,
      choiceC: req.body.questions[0].choiceC,
      choiceD: req.body.questions[0].choiceD
    },
    {
      Category: req.body.questions[1].category,
      Difficulty: req.body.questions[1].difficulty,
      Type: req.body.questions[1].type,
      Question: req.body.questions[1].question,
      Answer: req.body.questions[1].answer,
      choiceA: req.body.questions[1].choiceA,
      choiceB: req.body.questions[1].choiceB,
      choiceC: req.body.questions[1].choiceC,
      choiceD: req.body.questions[1].choiceD
    },
    {
      Category: req.body.questions[2].category,
      Difficulty: req.body.questions[2].difficulty,
      Type: req.body.questions[2].type,
      Question: req.body.questions[2].question,
      Answer: req.body.questions[2].answer,
      choiceA: req.body.questions[2].choiceA,
      choiceB: req.body.questions[2].choiceB,
      choiceC: req.body.questions[2].choiceC,
      choiceD: req.body.questions[2].choiceD
    }
  ]);
}
