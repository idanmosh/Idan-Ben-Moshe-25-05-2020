import * as actionTypes from './actionTypes';
import axios from 'axios';

export const toggleFavorite = key => {
    return {
        type: actionTypes.TOGGLE_FAVORITE,
        key: key
    };
}

export const locationRequestStart = () => {
    return {
        type: actionTypes.LOCATION_REQUEST_START
    };
}

export const locationRequestFail = error => {
    return {
        type: actionTypes.LOCATION_REQUEST_FAIL,
        error: error
    };
}

export const setLocationsForAutoComplete = locations => {
    return {
        type: actionTypes.SET_LOCATIONS_FOR_AC,
        locations: locations
    };
}

export const getLocationsForAutoComplete = query => {
    return dispatch => {
        dispatch(locationRequestStart());
        axios.get(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${actionTypes.API_KEY}&q=${query}`)
            .then(response => {
                dispatch(setLocationsForAutoComplete(response.data));
            }).catch(error => {
                dispatch(locationRequestFail(error));
            });
    };
}

export const addLocationToState = location => {
    return {
        type: actionTypes.ADD_LOCATION_TO_STATE,
        location: location
    };
}

export const setCurrentLocation = key => {
    return {
        type: actionTypes.SET_CURRENT_LOCATION,
        key: key
    };
}

export const clearLocations = () => {
    return {
        type: actionTypes.CLEAR_LOCATIONS
    };
}