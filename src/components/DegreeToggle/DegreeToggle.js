import React, { Fragment, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as actions from '../../store/actions/index';

const DegreeToggle = () => {

    const dispatch = useDispatch();

    const onDegreeType = useSelector(state => state.degree.degreeType);

    const [degreeType, setDegreeType] = useState(onDegreeType);

    let onChangeDegreeType = useCallback(degreeType => dispatch(actions.setDegreeType(degreeType)), [dispatch]);

    const updateForecastDegree = event => {
        setDegreeType(event.target.value);
        onChangeDegreeType(event.target.value);
    }

    return (
        <Fragment>
            <div className={"row justify-content-center mx-auto my-3"}>
                <div className={"form-check form-check-inline"}>
                    <input
                        className={"form-check-input"}
                        type={"radio"}
                        name={"degree-type"}
                        id={"celsius"}
                        value={"celsius"}
                        checked={degreeType === "celsius"}
                        onChange={updateForecastDegree}
                    />
                    <label className={"form-check-label"} htmlFor={"celsius"} >Celsius</label>
                    </div>
                <div className={"form-check form-check-inline"}>
                    <input
                        className={"form-check-input"}
                        type={"radio"}
                        name={"degree-type"}
                        id={"farenheit"}
                        value={"fahrenheit"}
                        checked={degreeType === "fahrenheit"}
                        onChange={updateForecastDegree}
                    />
                    <label className={"form-check-label"} htmlFor={"farenheit"} >Farenheit</label>
                </div>
            </div>
        </Fragment>
    );
}

export default DegreeToggle;