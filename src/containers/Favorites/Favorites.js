import React, { Fragment} from 'react';
import { useSelector } from 'react-redux';

import FavoriteItem from '../../components/FavoriteItem/FavoriteItem';

const Favorites = ( props ) => {

    const favoriteLocations = useSelector(state => state.locations.locations).filter(loc => loc.isFavorite);

    let content = <h2>Favorites list is empty</h2>;

    if (favoriteLocations.length > 0) {
        content = favoriteLocations.map(location => {
            const fullLocation = `${location.LocalizedName}, ${location.Country.LocalizedName}`;
            return (
                <FavoriteItem
                    key={location.Key}
                    location={fullLocation} 
                    favorite={location.isFavorite}
                    locationKey={location.Key} />
            )
        });
    }

    return(
        <Fragment>
            <div className={"row justify-content-center"}>
                {content}
            </div>
        </Fragment>
    );
}

export default Favorites;