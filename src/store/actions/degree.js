import * as actionTypes from './actionTypes';

export const setDegreeType = degreeType => {
    return {
        type: actionTypes.SET_DEGREE_TYPE,
        degreeType: degreeType
    };
}