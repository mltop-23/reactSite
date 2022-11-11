import {$authHost, $host} from "./index";

export const fetchBrands = async () => {
    const {data} = await $host.get('/api/brand')
    return data
}
export const createBrand = async (value) => {
    const {data} = await $authHost.post('api/brand', {value})
    return data
}