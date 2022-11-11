const Router = require('express')
const router = new Router()

const producerCountryController = require('../controllers/producerCountryController')

router.post('/',producerCountryController.Create)
router.get('/',producerCountryController.GetAll)
router.delete('/:id',producerCountryController.DeleteOne)

module.exports = router