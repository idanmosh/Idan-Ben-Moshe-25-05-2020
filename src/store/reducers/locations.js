import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    locations: [
        {
            Key: '215854',
            LocalizedName: 'Tel Aviv',
            Country: {
                Id: 'IL',
                LocalizedName: 'Israel'
            },
            isCurrent: true,
            isFavorite: false
        }
    ],
    autoComplete: [],
    error: null,
    isLoading: false
};

const toggleFav = (state, action) => {
    const key = action.key;
    const index = state.locations.findIndex(loc => loc.Key === key);
    let newFavStatus = true;
    if (typeof state.locations[index].isFavorite !== 'undefined') {
        newFavStatus = !state.locations[index].isFavorite;
    }
    const updatedLocations = [...state.locations];
    updatedLocations[index] = { ...state.locations[index], isFavorite: newFavStatus };

    return updateObject(state, { locations: updatedLocations });
}

const getLocationForAC = (state, action) => {
    return updateObject(state, { autoComplete: action.locations });
}

const addLocationToState = (state, action) => {
    const updatedLocations = [...state.locations];
    updatedLocations.push(action.location);
    return updateObject(state, { locations: updatedLocations });
}

const setCurrentLocation = (state, action) => {
    const currentLocationIndex = state.locations.findIndex(loc => loc.isCurrent);
    const updatedOldCurrentLocation = { ...state.locations[currentLocationIndex] };
    updatedOldCurrentLocation.isCurrent = false;

    const updatedLocations = [...state.locations];
    updatedLocations[currentLocationIndex] = updatedOldCurrentLocation;

    const key = action.key;
    const index = state.locations.findIndex(loc => loc.Key === key);
    updatedLocations[index] = { ...state.locations[index], isCurrent: true };

    return updateObject(state, { locations: updatedLocations, error: null, isLoading: false });
}

const startRequest = (state, action) => {
    return updateObject(state, { isLoading: true, error: null });
}

const requestFail = (state, action) => {
    return updateObject(state, { isLoading: false, error: action.error });
}

const clearLocations = (state, action) => {
    return updateObject(state, initialState);
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOCATION_REQUEST_START: return startRequest(state, action);
        case actionTypes.LOCATION_REQUEST_FAIL: return requestFail(state, action);
        case actionTypes.TOGGLE_FAVORITE: return toggleFav(state, action);
        case actionTypes.SET_LOCATIONS_FOR_AC: return getLocationForAC(state, action);
        case actionTypes.SET_CURRENT_LOCATION: return setCurrentLocation(state, action);
        case actionTypes.ADD_LOCATION_TO_STATE: return addLocationToState(state, action);
        case actionTypes.CLEAR_LOCATIONS: return clearLocations(state, action);
        default: return state;
    }
}

export default reducer;