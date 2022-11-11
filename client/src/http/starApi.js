import {$authHost, $host} from "./index";

export const fetchStars = async () => {
    const {data} = await $host.get('/api/star')
    return data
}
export const createStar = async (value) => {
    const {data} = await $authHost.post('api/star', {value})
    return data
}