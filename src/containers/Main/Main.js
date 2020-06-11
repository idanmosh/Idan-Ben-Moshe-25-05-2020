import React, { Fragment } from 'react';

import SearchBox from '../../components/SearchBox/SearchBox';
import WeatherNow from '../../components/WeatherNow/WeatherNow';
import FiveDaysForecast from '../FiveDaysForecast/FiveDaysForecast';
import DegreeToggle from '../../components/DegreeToggle/DegreeToggle';

const Main = () => {

    return(
        <Fragment>
            <SearchBox/>
            <DegreeToggle/>
            <WeatherNow/>
            <FiveDaysForecast/>
        </Fragment>
    );
}

export default Main;