import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import locationsReducer from './store/reducers/locations';
import currentWeatherReducer from './store/reducers/currentWeather';
import generalReducer  from './store/reducers/general';
import dailyWeatherReducer from './store/reducers/dailyWeather';

const rootReducer  = combineReducers({
  locations: locationsReducer,
  currentWeather: currentWeatherReducer,
  general: generalReducer,
  dailyWeather: dailyWeatherReducer
});

const logger = store => {
  return next => {
      return action => {
          return next(action);
      }
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer , composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
