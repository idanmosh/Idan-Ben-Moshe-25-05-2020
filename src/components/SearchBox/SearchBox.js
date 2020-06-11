import React, { memo, useRef, useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/actions/index';
import AutoComplete from '../../UI/AutoComplete/AutoComplete';


const SearchBox = () => {

    const [searchInput, setSearchInput] = useState('');
    const inputRef = useRef();

    const dispatch = useDispatch();

    let locations = useSelector(state => state.locations.autoComplete);

    const requestLocationsForAC = useCallback(search => dispatch(actions.getLocationsForAutoComplete(search)), [dispatch]);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchInput === inputRef.current.value) 
                requestLocationsForAC(searchInput);
        }, 500);

        return () => clearTimeout(timer);
    }, [requestLocationsForAC, searchInput])

    const onChangedTextHandler = event => {
        setSearchInput(event.target.value);
    }

    const onLocationClickedHandler = () => {
        setSearchInput('');
        locations = [];
    }

    return(
        <div className={"container my-4"}>
            <form>
                <div className={"input-group"}>
                    <input type={"text"} ref={inputRef} value={searchInput} className={"form-control"} autoComplete={"off"}
                    placeholder={"Search Location"} name={"Search Location"} onChange={onChangedTextHandler}/>
                </div>
                <div className={"input-group"}>
                {locations.length > 0 ? <AutoComplete locations={locations} click={onLocationClickedHandler}/> : null}
                </div>
            </form>
        </div>
    );
}

export default memo(SearchBox);

