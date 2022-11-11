import {$authHost, $host} from "./index";

export const fetchProducerCountries = async () => {
    const {data} = await $host.get('/api/producerCountry')
    return data
}

export const createProducerCountry = async (value) => {
    const {data} = await $authHost.post('api/producerCountry', {value})
    return data
}