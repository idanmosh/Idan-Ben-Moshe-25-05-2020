
export const celsiusToFahrenheit = ( celsius ) => {

    const fahrenheit = ((celsius * 1.8) + 32).toFixed(2);

    return `${fahrenheit}`;
}