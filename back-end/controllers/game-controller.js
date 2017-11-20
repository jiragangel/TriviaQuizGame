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
  HighScore.find({},{}).sort({Score: 1}).exec(function(err, models) {
      if (err) {
          res.render('error', {
              status: 500
          });
      } else {
          res.send(models);
      }
  });
}
