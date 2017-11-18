const Questions = require('mongoose').model('Questions');
const HighScores = require('mongoose').model('HighScores');

exports.showQuestions = (req, res) => {
  Questions.find({}, (err, movies) => {
    res.send(movies)
  });
}
