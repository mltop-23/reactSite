import {$authHost} from "./index";

export const getAllBasketBalls = async (basketId) => {
    const {data} = await $authHost.get('api/basketBall' , {params: {basketId}})
    return data
}

export const getAllBasketBallsCount = async () => {
    const {data} = await $authHost.get('api/basketBall/count')
    return data
}

export const getOneBasketBallCount = async (ballId) => {
    const {data} = await $authHost.get('api/basketBall/count', {params: {ballId}})
    return data
}

export const createBasketBall = async (basketId, ballId) => {
    const {data} = await $authHost.post('api/basketBall', {basketId, ballId})
    return data
}

export const changeBasketBallCount = async (ballId, count) => {
    const {data} = await $authHost.put(`api/basketBall/${ballId}`,{count})
    return data
}

export const deleteOneBasketBall = async (id) => {
    const {data} = await $authHost.delete('api/basketBall', {params: {id}})
    return data
}