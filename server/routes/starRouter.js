const Router = require('express')
const router = new Router()

const starController = require('../controllers/starController')

router.post('/',starController.Create)
router.get('/',starController.GetAll)
router.delete('/:id',starController.DeleteOne)

module.exports = router