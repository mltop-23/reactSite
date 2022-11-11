const Router = require('express')
const router = new Router()

const ballController = require('../controllers/ballController')

router.post('/',ballController.Create)
router.get('/',ballController.GetAll)
router.get('/:id',ballController.GetOne)
router.delete('/:id',ballController.DeleteOne)

module.exports = router