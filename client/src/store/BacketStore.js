import {makeAutoObservable} from "mobx";

export default class BacketStore {
    constructor() {
        this._bakset = {
            id: '11',
            userId: '11'
        }
        this._baksetBalls = []
        makeAutoObservable(this)
    }

    setBakset(basket) {
        this._bakset = basket
    }
    setBaksetBall(basketBalls) {
        this._baksetBalls = basketBalls
        // this._baksetBalls.push(basketBall)
    }

    removeBasketBall(basketBall){
        this._baksetBalls.remove(basketBall)
    }

    get basket() {
        return this._bakset
    }
    get basketBalls() {
        return this._baksetBalls
    }
}