import {$authHost, $host} from "./index";

export const fetchTypes = async () => {
    const {data} = await $host.get('/api/type')
    return data
}
export const createType = async (value) => {
    const {data} = await $authHost.post('api/type', {value})
    return data
}