import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classes from './FiveDaysForecast.module.css';
import * as actions from '../../store/actions/index';
import { formatDate } from '../../store/utility';
import DailyForecast from '../../components/DailyForecast/DailyForecast';
import Spinner from '../../UI/Spinner/Spinner';

const FiveDaysForecast = () => {
    const dispatch = useDispatch();

    const locations = useSelector(state => state.locations.locations);
    const currentLocation = locations.find(location => location.isCurrent);
    const dailyForecast = useSelector(state => state.dailyWeather.dailyForecasts);

    const locationError = useSelector(state => state.locations.error);
    const forecastError = useSelector(state => state.dailyWeather.error);
    const degreeType = useSelector(state => state.degree.degreeType);
    
    const onGetDailyForcast = useCallback(() => dispatch(actions.get5DaysWeather(currentLocation.Key)), [currentLocation.Key, dispatch]);
    const onOpenModal = useCallback(() => dispatch(actions.openModal()), [dispatch]);

    useEffect(() => {
        if (locationError || forecastError) {
            onOpenModal();
        } else {
            onGetDailyForcast();
        }
    }, [forecastError, locationError, onGetDailyForcast, onOpenModal]);

    let content = locationError || forecastError ? <h2 style={{marginLeft: '0.5rem'}}>Can't Load Daily Forecast...</h2> : <Spinner />

    if (dailyForecast) {
        content = dailyForecast.map(daily => {
            return (
               <div className={classes.col} key={daily.EpochDate} >
                    <DailyForecast
                        date={formatDate(daily.Date, 'short-with-day')}
                        dayTemperature={daily.Temperature.Maximum.Value}
                        dayImageNumber={daily.Day.Icon}
                        dayStatus={daily.Day.IconPhrase}
                        nightTemperature={daily.Temperature.Minimum.Value}
                        nightImageNumber={daily.Night.Icon}
                        nightStatus={daily.Night.IconPhrase}
                        degreeType={degreeType}
                    />
               </div>
            );
        });
    }
    
    return (
        <div className={"container"}>
            <div className={"row justify-content-center"}>
                {content}
            </div>
        </div>
    );
}

export default FiveDaysForecast;