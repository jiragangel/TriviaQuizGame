const router = require('express').Router();
const GameController = require('../controllers/game-controller');

/**
 * GET    /find-all
 * GET    /find-by-id
 * POST   /add
 * POST   /delete
 */

router.get('/showQuestions', GameController.showQuestions);
router.get('/showHighScores', GameController.showHighScores);
router.get('/showCategories',GameController.showCategories);
router.post('/addhs',GameController.addhs);
module.exports = router;
