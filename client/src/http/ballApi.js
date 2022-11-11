import {$authHost, $host} from "./index";

export const fetchBalls = async () => {
    const {data} = await $host.get('/api/ball')
    return data
}

export const getOneBall = async (ballId) => {
    const {data} = await $host.get(`/api/ball/${ballId}`)
    return data
}

export const createBall = async (ball) => {
    const {data} = await $authHost.post('api/ball', ball)
    return data
}

export const deleteOneBall = async (ballId) => {
    const {data} = await $host.delete(`/api/ball/${ballId}`)
    return data
}