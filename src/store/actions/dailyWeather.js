import axios from 'axios';

import * as actionTypes from './actionTypes';

export const set5DaysWeatherStart = () => {
    return {
        type: actionTypes.START_SET_5_DAYS_WEATHER
    };
}

export const set5DaysWeatherFail = error => {
    return {
        type: actionTypes.FAIL_SET_5_DAYS_WEATHER,
        error: error
    };
}

export const set5DaysWeather = data => {
    return {
        type: actionTypes.SET_5_DAYS_WEATHER,
        dailyForecasts: data.DailyForecasts
    };
}

export const get5DaysWeather = locationKey => {
    return dispatch => {
        dispatch(set5DaysWeatherStart());
        axios.get(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${actionTypes.API_KEY}&metric=true`)
            .then(response => {
                dispatch(set5DaysWeather(response.data));
            }).catch(error => {
                dispatch(set5DaysWeatherFail(error));
            });
    }
}

export const clearDailyForecast = () => {
    return {
        type: actionTypes.CLEAR_DAILY_FORECAST
    };
}