import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import * as actions from '../../store/actions/index';

const FavoritBtn = ( props ) => {
    const dispatch = useDispatch();

    const onToggleFav = useCallback(() => dispatch(actions.toggleFavorite(props.locationKey)), [dispatch, props.locationKey]);

    const classList = ['btn btn-outline-secondary float-right'];
    let title = 'Click to add to favorites';
    let buttonText = 'Add To Favorites';

    if (props.favorite) {
        classList.push('active');
        buttonText = 'Remove From Favorites';
        title = 'Click to remove from favorites';
    }
  
    return (
        <button title={title} type="button" className={classList.join(' ')} onClick={onToggleFav}>{buttonText}</button>
    );
}

export default FavoritBtn;