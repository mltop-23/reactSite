import {$authHost} from "./index";


export const sendMail = async (sendler,textMessage) => {
    const {data} = await $authHost.get('api/sendmail/send', {params:{sendler,textMessage}})
    return data
}