import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/home/Home';
import FirstPage from '../FirstPage';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={FirstPage} />
            <Route exact path="/foodie/" component={Home} />
        </Switch>
    );
}

export default Routes;