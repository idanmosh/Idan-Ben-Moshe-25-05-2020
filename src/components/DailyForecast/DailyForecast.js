import React from 'react';

import { celsiusToFahrenheit } from '../../components/celsiusToFahrenheit';
import WeatherImage from '../../UI/WeatherImage/WeatherImage';
import classes from './DailyForecast.module.css';

const DailyForecast = ( props ) => {

    let dayTemperature;
    let nightTemperature;
    if(props.degreeType === 'fahrenheit') {
        dayTemperature = celsiusToFahrenheit(props.dayTemperature) + '\u2109';
        nightTemperature = celsiusToFahrenheit(props.nightTemperature) + '\u2109';
    }
    else {
        dayTemperature = props.dayTemperature.toFixed(2) + '\u2103';
        nightTemperature = props.nightTemperature.toFixed(2) + '\u2103';
    }
    
    
    return (
        <div className={"card bg-dark my-4 py-2"}>
            <h4 className={"card-title mx-auto"}>{props.date}</h4>
            <hr/>
            <div className={"mx-auto"}>
                <WeatherImage imageIcon={props.dayImageNumber}/>
            </div>
            <div className={"mx-auto"}>
                <h5 className={"card-title"}>{dayTemperature}</h5>
            </div>
            <div className={"mx-auto"}>
                <h5>{props.dayStatus}</h5>
            </div>
            <hr/>
            <div className={"mx-auto"}>
                <WeatherImage imageIcon={props.nightImageNumber}/>
            </div>
            <div className={"mx-auto"}>
                <h5 className={"card-title"}>{nightTemperature}</h5>
            </div>
            <div className={"mx-auto"}>
                <h5>{props.nightStatus}</h5>
            </div>
        </div>
    );
}

export default DailyForecast;