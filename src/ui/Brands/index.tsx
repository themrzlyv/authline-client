import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CarBrandDetail from './pages/CarBrandDetail';
import CarBrands from './pages/CarBrands/CarBrands';
import CarModelDetail from './pages/CarModelDetail';

const Brands = () => {
  return (
    <>
      <Switch>
        <Route path="/brands" exact component={CarBrands} />
        <Route path="/brands/:slug" exact component={CarBrandDetail} />
        <Route path="/brands/:slug/:slug" component={CarModelDetail} />
      </Switch>
    </>
  );
};

export default Brands;
