const Router = require('express')
const router = new Router()

const ballOrderSendController = require('../controllers/orderSendController')

router.get('/send',ballOrderSendController.Create)


module.exports = router