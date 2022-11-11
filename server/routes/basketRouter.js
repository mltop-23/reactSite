const Router = require('express')
const router = new Router()

const basketController = require('../controllers/basketController')

router.post('/',basketController.Create)
router.get('/',basketController.GetAll)
router.delete('/:id',basketController.DeleteOne)

module.exports = router