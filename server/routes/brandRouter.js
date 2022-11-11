const Router = require('express')
const router = new Router()

const brandController = require('../controllers/brandController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/',brandController.Create)
// router.post('/',checkRoleMiddleware('ADMIN'),brandController.Create)
router.get('/',brandController.GetAll)
router.delete('/:id',brandController.DeleteOne)

module.exports = router