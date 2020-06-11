import React, { useEffect, useCallback, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classes from './WeatherNow.module.css';
import * as actions from '../../store/actions/index';
import { formatDate } from '../../store/utility';
import WeatherImage from '../../UI/WeatherImage/WeatherImage';
import Spinner from '../../UI/Spinner/Spinner';
import FavoriteBtn from '../../UI/FavoriteBtn/FavoriteBtn';

const WeatherNow = () => {
    const dispatch = useDispatch();

    const locations = useSelector(state => state.locations.locations);
    const currentLocation = locations.find(location => location.isCurrent);
    const allLocationWeather = useSelector(state => state.currentWeather.currentWeather);
    const currentWeather = allLocationWeather ? allLocationWeather?.find(cur => cur.Key === currentLocation.Key) : null;

    const locationError = useSelector(state => state.locations.error);
    const weatherError = useSelector(state => state.currentWeather.error);
    const degreeType = useSelector(state => state.degree.degreeType);

    const onGetCurrentWeather = useCallback(() => dispatch(actions.getCurrentWeather(currentLocation.Key)), [currentLocation.Key, dispatch]);
    const onOpenModal = useCallback(() => dispatch(actions.openModal()), [dispatch]);

    useEffect(() => {
        if (locationError || weatherError) {
            onOpenModal();
        } else {
            onGetCurrentWeather();
        }
    }, [locationError, onGetCurrentWeather, onOpenModal, weatherError]);

    let content = locationError || weatherError ? <h2 style={{"textAlign": 'center'}}>Can't Load Content...</h2> : <Spinner/>;

    if (currentWeather) {
        const temperature = degreeType === 'fahrenheit' ?
        ((currentWeather.Temperature?.Metric.Value * 1.8) + 32).toFixed(2) + '\u2109'
        : currentWeather.Temperature?.Metric.Value.toFixed(2) + '\u2103';
        content = (
            <Fragment>
                    <div className={"card bg-dark mx-auto"}>
                        <div className={"card-body"}>
                            <h1 className={"card-title"}>{currentLocation.LocalizedName}, {currentLocation.Country.LocalizedName}</h1>
                            <FavoriteBtn favorite={currentLocation.isFavorite} locationKey={currentLocation.Key}/>
                            <h3>{formatDate(currentWeather.LocalObservationDateTime)}</h3>
                            <h3 className={classes.WeatherText}>{currentWeather.WeatherText}</h3>
                            <h3 className={classes.WeatherText}>{temperature}</h3>
                            <WeatherImage imageIcon={currentWeather.WeatherIcon}/>
                        </div>
                    </div>
            </Fragment>
        );
    }
    

    return (
        <div className={"container"}>
            {content}
        </div>
    );
}
    
export default WeatherNow;