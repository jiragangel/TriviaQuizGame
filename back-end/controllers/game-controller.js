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
  console.log("DELETE");
  Question.remove({ Category: req.body.category }, (error, movie) => {
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
  console.log("TO DELETE: " + req.body.todelete);
  console.log("NAME: " + req.body.name);
  console.log("PERCENTILE: " + req.body.percentile);
  HighScore.insertMany([{Name: req.body.name, Score: req.body.percentile}]);
  HighScore.remove({_id: req.body.todelete}).exec(function(err, models){
    if (!err) res.send("Not error");
  });
}

exports.addQuestions = (req,res) => {
  Question.insertMany([{Category: req.body.category, Difficulty: req.body.difficulty, Type: req.body.type, Question: req.body.question, Answer: req.body.answer, choiceA: req.body.choiceA, choiceB: req.body.choiceB, choiceC: req.body.choiceC, choiceD: req.body.choiceD}]);
}
