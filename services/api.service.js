import { TOKENT_DICTIONARY, getKeyValue } from './storage.service.js'
import axios from 'axios'

const getWeather = async (city) => {
    const token = await getKeyValue(TOKENT_DICTIONARY.token)
    if (!token) {
        throw new Error('The API token is empty. Set the token with the it [API_KEY] command.')
    }

    const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: token,
            lang: 'en',
            units: 'metric',
        }
    })

    return data
}   

export { getWeather }
