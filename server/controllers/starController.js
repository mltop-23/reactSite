const {Star} = require('../models/models')
const ApiError = require('../error/apiError')

class StarController {
    async Create(request,response,next){
        try {
            const {value} = request.body
            const star = await Star.create({value})
            return response.json(star)
        }
        catch (error){
            return next(ApiError.BadRequest(error.message))
        }
    }
    async GetAll(request,response,next){
        try {
            const stars = await Star.findAll()
            return response.json(stars)
        }
        catch (error){
            return next(ApiError.BadRequest(error.message))
        }
    }

    async DeleteOne(request,response,next){
        try {
            const {id} = request.params

            await Star.destroy({where: {id}})

            return response.json("Объект успешно удален")
        }
        catch (error){
            return next(ApiError.BadRequest(error.message))
        }
    }
}

module.exports = new StarController()