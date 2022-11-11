import {$authHost} from "./index";

export const createBallInfo = async (starId, brandId, typeId, producerCountryId) => {
    const {data} = await $authHost.post('api/ballInfo', {starId, brandId, typeId, producerCountryId})
    return data
}