const {BallInfo, Type, Brand, Star, ProducerCountry} = require('../models/models')
const ApiError = require('../error/apiError')

class BallInfoController {

    async Create(request,response,next){
        try {
            const {starId, brandId, typeId, producerCountryId} = request.body

            let ballInfo = await BallInfo.findOne({where: {starId, brandId, typeId, producerCountryId}})

            if (!ballInfo)
                ballInfo = await BallInfo.create({starId, brandId, typeId, producerCountryId})

            return response.json(ballInfo)
        }
        catch (error){
            return next(ApiError.BadRequest(error.message))
        }
    }

    async GetAll(request,response,next){
        try {
            const ballInfo = await BallInfo.findAll({
                include: [
                    {model: Type, as: 'type'},
                    {model: Brand, as: 'brand'},
                    {model: Star, as: 'star'},
                    {model: ProducerCountry, as: 'producer_country'}
                ]
            })
            return response.json(ballInfo)
        }
        catch (error){
            return next(ApiError.BadRequest(error.message))
        }
    }

    async DeleteOne(request,response,next){
        try {
            const {id} = request.params

            await BallInfo.destroy({where: {id}})

            return response.json("Объект успешно удален")
        }
        catch (error){
            return next(ApiError.BadRequest(error.message))
        }
    }
}

module.exports = new BallInfoController()