import axios from 'axios';
const API_KEY = '24e88f64f98230c8f8b538eb27dfea0b';
const ROOT_URL = `https://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;

    //Does an ajax request
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}