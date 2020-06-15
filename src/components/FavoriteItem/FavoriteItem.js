import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';
import * as actions from '../../store/actions/index';
import FavoriteBtn from '../../UI/FavoriteBtn/FavoriteBtn';

const FavoriteItem = ( props ) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const locations = useSelector(state => state.locations.locations);
    const currentLocation = locations.find(location => location.Key === props.locationKey);
    const currentWeather = useSelector(state => state.currentWeather.currentWeather).find(cur => cur.Key === currentLocation.Key);
    const degreeType = useSelector(state => state.degree.degreeType);

    const setCurrentLocation = useCallback(key => dispatch(actions.setCurrentLocation(key)), [dispatch]);

    const clickHandler = key => {
        setCurrentLocation(key);
        history.push('/');
    }

    const H1 = styled.h1`
        font-size: larger;
    `;

    const cardStyle = {
        "max-width" : '20rem'
    }

    const currentTemp = degreeType === 'fahrenheit' ?
    ((currentWeather.Temperature?.Metric.Value * 1.8) + 32).toFixed(2) + '\u2109'
    : currentWeather.Temperature?.Metric.Value.toFixed(2) + '\u2103';

    return (
        <div className={"card text-white bg-dark m-4"} style={cardStyle} onClick={() => clickHandler(props.locationKey)}>
            <div className={"mx-auto mt-2"}>
                <H1 className={"card-title"}>{props.location}</H1>
            </div>
            <div className={"mx-auto mt-2"}>
                <h3 className={"card-title"}>{currentWeather.WeatherText}</h3>
            </div>
            <h3 className={"card-title mx-auto"}>{currentTemp}</h3>
            <FavoriteBtn favorite={currentLocation.isFavorite} locationKey={currentLocation.Key}/>
        </div>
    );
}

export default FavoriteItem;
