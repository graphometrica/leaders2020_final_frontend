import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './common';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {  
  Landing as LandingView
} from './landing';

import {  
  Forecast as ForecastView,
  Forecast2 as ForecastView2
} from './forecast';

const Routes = () => {
  return (
    <Switch>      
      <RouteWithLayout
        component={LandingView}
        exact
        layout={MainLayout}
        path="/forecast"
      />

<RouteWithLayout
        component={ForecastView2}
        exact
        layout={MainLayout}
        path="/"
      />

    <RouteWithLayout
        component={ForecastView}
        exact
        layout={MainLayout}
        path="/2"
      />
      
    </Switch>
  );
};

export default Routes;
