const {BasketBall, Ball, BallInfo, Type, Brand, Star, ProducerCountry} = require('../models/models')
const ApiError = require('../error/apiError')

class BasketBallController {
    async Create(request,response,next){
        try {
            const {ballId,basketId} = request.body

            if (ballId && basketId) {
                const basketBall = await BasketBall.create({ballId, basketId})
                return response.json(basketBall)
            }
            else {
                return next(ApiError.BadRequest('Некорекктно введены данные'))
            }
        }
        catch (error){
            return next(ApiError.BadRequest(error.message))
        }
    }

    async UpdateCount(request,response,next){
        try {
            const {ballId} = request.params
            const {count} = request.body

            if (!ballId)
                return next(ApiError.BadRequest("Такого элемента не существует"))

            const changedRaws = await BasketBall.update({count: count},{where: {ballId}})

            if (changedRaws > 0)
            {
                const basketBall = await BasketBall.findOne({where: {ballId}})
                return response.json(basketBall.count)
            }
            else
                return next(ApiError.BadRequest("Не нашлось, что надо менять"))
        }
        catch (error) {
            return next(ApiError.BadRequest(error.message))
        }
    }


    async GetAll(request,response,next){
        try {
            const {basketId} = request.query

            const baskets = await BasketBall.findAll({
                where: {basketId},
                include: {model: Ball, as: 'ball',
                    include: {model: BallInfo, as: 'ball_info', include: [
                            {model: Type, as: 'type'},
                            {model: Brand, as: 'brand'},
                            {model: Star, as: 'star'},
                            {model: ProducerCountry, as: 'producer_country'}
                        ]}}
            })
            return response.json(baskets)
        }
        catch (error){
            return next(ApiError.BadRequest(error.message))
        }
    }

    async GetOne(request,response,next){
        try {
            const {id} = request.params

            const basketBall = await BasketBall.findOne({where: {id}})

            return response.json(basketBall)
        }
        catch (error) {
            return next(ApiError.BadRequest(error.message))
        }
    }

    async GetAllCount(request,response,next){
        try {
            const basketBallCount = await BasketBall.count()

            return response.json(basketBallCount)
        }
        catch (error) {
            return next(ApiError.BadRequest(error.message))
        }
    }

    async GetOneBallCount(request,response,next){
        try {
            const {ballId} = request.query

            const basketBall = await BasketBall.findOne({where: {ballId}})

            if (basketBall)
                return response.json(basketBall.count)
            else
                return response.json(0)
        }
        catch (error) {
            return next(ApiError.BadRequest(error.message))
        }
    }

    async DeleteOne(request,response,next){
        try {
            const {id} = request.query

            const deletedBall = await BasketBall.findOne({where: {id}})
            await BasketBall.destroy({where: {id}})

            return response.json(deletedBall)
        }
        catch (error){
            return next(ApiError.BadRequest(error.message))
        }
    }
}

module.exports = new BasketBallController()