import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    currentWeather: [],
    error: null,
    isLoading: false
};

const setCurrentWeather = (state, action) => {
    const locationWeather = action.locationWeather;
    locationWeather.Key = action.key;
    const updatedCurrentWeather = [...state.currentWeather];

    updatedCurrentWeather.push(locationWeather);

    return updateObject(state, { currentWeather: updatedCurrentWeather, error: null, isLoading: false });
}

const getCurrentWeatherFail = (state, action) => {
    return updateObject(state, { error: action.error, isLoading: false });
}

const startSetCurrentWeather = (state, action) => {
    return updateObject(state, { error: null, isLoading: true });
}

const clearCurrentWeather = (state, action) => {
    return updateObject(state, initialState);
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FAIL_SET_CURRENT_WEATHER: return getCurrentWeatherFail(state, action);
        case actionTypes.START_SET_CURRENT_WEATHER: return startSetCurrentWeather(state, action);
        case actionTypes.SET_CURRENT_WEATHER: return setCurrentWeather(state, action);
        case actionTypes.CLEAR_CURRENT_WEATHER: return clearCurrentWeather(state, action);
        default: return state;
    }
}

export default reducer;