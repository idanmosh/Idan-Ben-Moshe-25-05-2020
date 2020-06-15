import React from 'react';

import { celsiusToFahrenheit } from '../../components/celsiusToFahrenheit';
import WeatherImage from '../../UI/WeatherImage/WeatherImage';
import styled from 'styled-components';

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

    const H4H5_style = {
        'color': 'white',
        'font-size': 'small'
    }
    
    const HR = styled.hr`
        width: 100%;
        background-color: white;
    `;
    
    return (
        <div className={"card bg-dark my-4 py-2"}>
            <h4 className={"card-title mx-auto"} style={H4H5_style}>{props.date}</h4>
            <HR/>
            <div className={"mx-auto"}>
                <WeatherImage imageIcon={props.dayImageNumber}/>
            </div>
            <div className={"mx-auto"}>
                <h5 className={"card-title"} style={H4H5_style}>{dayTemperature}</h5>
            </div>
            <div className={"mx-auto"}>
                <h5 style={H4H5_style}>{props.dayStatus}</h5>
            </div>
            <HR/>
            <div className={"mx-auto"}>
                <WeatherImage imageIcon={props.nightImageNumber}/>
            </div>
            <div className={"mx-auto"}>
                <h5 className={"card-title"} style={H4H5_style}>{nightTemperature}</h5>
            </div>
            <div className={"mx-auto"}>
                <h5 style={H4H5_style}>{props.nightStatus}</h5>
            </div>
        </div>
    );
}

export default DailyForecast;