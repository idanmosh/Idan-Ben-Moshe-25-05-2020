import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import * as actions from '../../store/actions/index';
import classes from './AutoComplete.module.css';

const AutoComplete = ( props ) => {
    const dispatch = useDispatch();

    const addLocationToState = useCallback(location => dispatch(actions.addLocationToState(location)), [dispatch]);
    const setCurrentLocation = useCallback(key => dispatch(actions.setCurrentLocation(key)), [dispatch]);

    const locationClickHandler = location => {
        addLocationToState(location);
        setCurrentLocation(location.Key);
        props.click();
    }

    return(
        <div className={classes.AutoComplete}>
            <ul>
                {props.locations.map(loc => <li key={loc.Key} onClick={() => locationClickHandler(loc)}>{loc.LocalizedName}, {loc.Country.LocalizedName}</li>)}
            </ul>
        </div>
    );
}  

export default AutoComplete;