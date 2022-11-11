require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/router')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')
const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 5000

const app = express()
function sendAll() {
    const transporter = nodemailer.createTransport({

        service:'gmail',
        auth:{
            user:process.env.EMAIL,
            pass:process.env.PASSWORD
        }

    })
    const mailOptions = {
        from:'malysheff33ml@gmail.com',
        to:'malysheff33ml@gmail.com',
        subject:'отправлено',
        text:'письмо'
    }
    transporter.sendMail(mailOptions)

}

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}


start()
