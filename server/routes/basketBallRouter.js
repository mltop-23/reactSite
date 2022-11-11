const Router = require('express')
const router = new Router()

const basketBallController = require('../controllers/basketBallController')

router.post('/',basketBallController.Create)
router.put('/:ballId',basketBallController.UpdateCount)
router.get('/',basketBallController.GetAll)
router.get('/allCount',basketBallController.GetAllCount)
router.get('/count/',basketBallController.GetOneBallCount)
router.get('/:id',basketBallController.GetOne)
router.delete('/',basketBallController.DeleteOne)

module.exports = router