import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './views/Login';
import Dashboard from './views/Dashboard';
import Info from './views/Info';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/contacts" component={Dashboard} />
                <Route exact path="/info" component={Info} />
            </Switch>
        </BrowserRouter>
    );        
}