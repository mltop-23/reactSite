const {Basket, Size} = require('../models/models')
const ApiError = require('../error/apiError')

class BasketController {
    async Create(request,response,next){
        try {
            const {userId} = request.body
            const basket = await Basket.create({userId})
            return response.json(basket)
        }
        catch (error){
            return next(ApiError.BadRequest(error.message))
        }
    }
    async GetAll(request,response,next){
        try {
            const baskets = await Basket.findAll()
            return response.json(baskets)
        }
        catch (error){
            return next(ApiError.BadRequest(error.message))
        }
    }

    async DeleteOne(request,response,next){
        try {
            const {id} = request.params

            await Basket.destroy({where: {id}})

            return response.json("Объект успешно удален")
        }
        catch (error){
            return next(ApiError.BadRequest(error.message))
        }
    }
}

module.exports = new BasketController()