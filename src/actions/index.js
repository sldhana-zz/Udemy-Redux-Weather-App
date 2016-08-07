import axios from 'axios';
import { FETCH_WEATHER } from './action_dictionary';

const API_KEY = '025da2899c4561f0089a6c4dd6f040d9';
//middlewares have the ability to intercept actions before they hit the reducer
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
