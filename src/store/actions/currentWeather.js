import axios from 'axios';

import * as actionTypes from './actionTypes';

export const startSetCurrentWeather = () => {
    return {
        type: actionTypes.START_SET_CURRENT_WEATHER
    };
}

export const failSetCurrentWeather = error => {
    return {
        type: actionTypes.FAIL_SET_CURRENT_WEATHER,
        error: error
    };
}

export const setCurrentWeather = (locationWeather, locationKey) => {
    return {
        type: actionTypes.SET_CURRENT_WEATHER,
        key: locationKey,
        locationWeather: locationWeather[0]
    };
}

export const getCurrentWeather = locationKey => {
    return dispatch => {
        dispatch(startSetCurrentWeather());
        axios.get(`https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${actionTypes.API_KEY}`)
            .then(response => {
                dispatch(setCurrentWeather(response.data, locationKey));
            }).catch(error => {
                dispatch(failSetCurrentWeather(error));
            });
    };
}

export const clearCurrentWeather = () => {
    return {
        type: actionTypes.CLEAR_CURRENT_WEATHER
    };
}