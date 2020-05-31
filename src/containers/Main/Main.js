import React, { Fragment } from 'react';

import SearchBox from '../../components/SearchBox/SearchBox';
import WeatherNow from '../../components/WeatherNow/WeatherNow';
import FiveDaysForecast from '../FiveDaysForecast/FiveDaysForecast';

const Main = () => {

    return(
        <Fragment>
            <SearchBox/>
            <WeatherNow/>
            <FiveDaysForecast/>
        </Fragment>
    );
}

export default Main;