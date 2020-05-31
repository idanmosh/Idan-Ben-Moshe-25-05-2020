import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    isModalOpen: false
};

const openModal = (state, action) => {
    return updateObject(state, { isModalOpen: true });
}

const closeModal = (state, action) => {
    return updateObject(state, { isModalOpen: false });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.OPEN_MODAL: return openModal(state, action);
        case actionTypes.CLOSE_MODAL: return closeModal(state, action);
        default: return state;
    }
}

export default reducer;