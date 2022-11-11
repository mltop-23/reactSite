const Router = require('express')
const router = new Router()

const ballInfoController = require('../controllers/ballInfoController')

router.post('/',ballInfoController.Create)
router.get('/',ballInfoController.GetAll)
router.delete('/:id',ballInfoController.DeleteOne)

module.exports = router