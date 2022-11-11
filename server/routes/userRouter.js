const Router = require('express')
const router = new Router()

const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration',userController.Registration)
router.post('/login',userController.Login)
router.get('/auth',authMiddleware,userController.Auth)

module.exports = router