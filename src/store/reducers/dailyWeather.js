import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    dailyForecasts: null,
    error: null,
    isLoading: false
};

const setDailyForecast = (state, action) => {
    return updateObject(state, { dailyForecasts: action.dailyForecasts })
}

const startSetDailyForecast = (state, action) => {
    return updateObject(state, { error: null, isLoading: true });
}

const failSetDailyForecast = (state, action) => {
    return updateObject(state, { error: action.error, isLoading: false });
}

const clearDailyForcast = (state, action) => {
    return updateObject(state, initialState);
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.START_SET_5_DAYS_WEATHER: return startSetDailyForecast(state, action);
        case actionTypes.FAIL_SET_5_DAYS_WEATHER: return failSetDailyForecast(state, action);
        case actionTypes.SET_5_DAYS_WEATHER: return setDailyForecast(state, action);
        case actionTypes.CLEAR_DAILY_FORECAST: return clearDailyForcast(state, action);
        default: return state;
    }
}

export default reducer;