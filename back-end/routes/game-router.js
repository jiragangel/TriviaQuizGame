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
router.post('/addQuestions',GameController.addQuestions);
router.post('/deleteCategories',GameController.deleteCategories);
router.post('/deleteQuestions',GameController.deleteQuestions);
<<<<<<< HEAD
router.post('/editQuestions',GameController.editQuestions);
=======
router.post('/addMultipleQuestions',GameController.addMultipleQuestions);
>>>>>>> 10b999d694cf9e26c110d675115982c6324fdcbf
module.exports = router;
