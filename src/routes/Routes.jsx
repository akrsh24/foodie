import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/home/Home';
import DineSearch from '../components/search/dine/DineSearch';
import FirstPage from '../FirstPage';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={FirstPage} />
            <Route exact path="/foodie/" component={Home} />
            <Route exact path="/foodie/search" component={DineSearch} />
        </Switch>
    );
}

export default Routes;