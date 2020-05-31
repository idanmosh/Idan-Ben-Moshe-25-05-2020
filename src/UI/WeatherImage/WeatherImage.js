import React from 'react';
import classes from './WeatherImage.module.css';

const WeatherImage = ( props ) => {
    let prefix = '';
    if (props.imageIcon < 10) {
        prefix = '0';
    }

    let image = null;

    try {
        const imageName = `${prefix}${props.imageIcon}-s`;
        image = <img src={require(`../../images/${imageName}.png`)} alt="Weather status" />
    } catch {
        image = <span>No Image</span>;
    }

    return (
        <div className={classes.WeatherImage}>
            {image}
        </div>
    );
}

export default WeatherImage;