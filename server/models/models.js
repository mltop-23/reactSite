const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, unique:true, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    phone: {type: DataTypes.STRING, unique: true, allowNull: false},
    role: {type: DataTypes.STRING, defaultValue: 'USER'}
})

const Basket = sequelize.define('basket',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const BasketBall = sequelize.define('basket_ball',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    count: {type: DataTypes.INTEGER, defaultValue: 1}
})

const Ball = sequelize.define('ball',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false, unique: true},
    price: {type: DataTypes.INTEGER, allowNull: false},
    image: {type: DataTypes.STRING, allowNull: false},
    count: {type: DataTypes.INTEGER, defaultValue: 0}
})

const BallInfo = sequelize.define('ball_info',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const Star = sequelize.define('star',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    value: {type: DataTypes.STRING, allowNull: false}
})

const Brand = sequelize.define('brand',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    value: {type: DataTypes.STRING, allowNull: false}
})

const Type = sequelize.define('type',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    value: {type: DataTypes.STRING, allowNull: false}
})

const ProducerCountry = sequelize.define('producer_country',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    value: {type: DataTypes.STRING, allowNull: false}
})

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketBall)
BasketBall.belongsTo(Basket)

Ball.hasOne(BasketBall)
BasketBall.belongsTo(Ball)

BallInfo.hasOne(Ball)
Ball.belongsTo(BallInfo)

Star.hasMany(BallInfo)
BallInfo.belongsTo(Star)

Brand.hasMany(BallInfo)
BallInfo.belongsTo(Brand)

Type.hasMany(BallInfo)
BallInfo.belongsTo(Type)

ProducerCountry.hasMany(BallInfo)
BallInfo.belongsTo(ProducerCountry)

module.exports = {
    User,
    Basket,
    BasketBall,
    Ball,
    BallInfo,
    Star,
    Brand,
    Type,
    ProducerCountry
}