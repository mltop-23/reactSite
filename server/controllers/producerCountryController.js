const {ProducerCountry} = require('../models/models')
const ApiError = require('../error/apiError')

class ProducerCountryController {
    async Create(request,response,next){
        try {
            const {value} = request.body
            const producerCountry = await ProducerCountry.create({value})
            return response.json(producerCountry)
        }
        catch (error){
            return next(ApiError.BadRequest(error.message))
        }
    }
    async GetAll(request,response,next){
        try {
            const producerCountries = await ProducerCountry.findAll()
            return response.json(producerCountries)
        }
        catch (error){
            return next(ApiError.BadRequest(error.message))
        }
    }

    async DeleteOne(request,response,next){
        try {
            const {id} = request.params

            await ProducerCountry.destroy({where: {id}})

            return response.json("Объект успешно удален")
        }
        catch (error){
            return next(ApiError.BadRequest(error.message))
        }
    }
}

module.exports = new ProducerCountryController()