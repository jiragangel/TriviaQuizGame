const Question = require('mongoose').model('Question');
const HighScore = require('mongoose').model('HighScore');

exports.showQuestions = (req, res) => {
  Question.find({},{_id:0}).exec(function(err, models) {
      if (err) {
          res.render('error', {
              status: 500
          });
      } else {
          console.log(models[0]);
          res.json(models);
      }
  });
}

exports.showHighScores = (req, res) => {
  HighScore.find({},{_id:0}).exec(function(err, models) {
      if (err) {
          res.render('error', {
              status: 500
          });
      } else {
          res.json(models);
      }
  });
}
