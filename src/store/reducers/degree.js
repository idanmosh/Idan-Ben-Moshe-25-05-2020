import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    degreeType: 'celsius'
};

const setDegreeType = (state, action) => {
    return updateObject(state, {degreeType: action.degreeType });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_DEGREE_TYPE: return setDegreeType(state, action);
        default: return state;
    }
}

export default reducer;