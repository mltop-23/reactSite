import {makeAutoObservable} from "mobx";
import orderPage from "../pages/OrderPage";

export default class BallStore {
    constructor() {
        this._balls = []
        this._orderedBalls = []
        makeAutoObservable(this)
    }
    setBalls(balls) {
        this._balls = balls
    }

    setOrderedBall(balls) {
        // if (!this._orderedBalls.some(orderBall => orderBall.id === ball.id))
        // {
        //     this._orderedBalls.push(ball)
        // }
        this._orderedBalls = balls
    }

    get balls() {
        return this._balls
    }
    get orderedBalls() {
        return this._orderedBalls
    }
}