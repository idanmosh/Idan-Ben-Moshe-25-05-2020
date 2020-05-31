import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import Main from './containers/Main/Main';
import Favorites from './containers/Favorites/Favorites';


const App = () => {
  return (
    <Layout>
          <Switch>
            <Route path={"/"} exact component={Main}/>
            <Route path={"/favorites"} component={Favorites}/>
          </Switch>
      </Layout>
  );
}

export default App;
