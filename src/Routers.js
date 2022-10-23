import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './PDT/HomePage/HomePage';
import RegisterUserPage from './PDT/RegisterUserPage/RegisterUserPage';

export default function Rutas() {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/RegisterUserPage" component={RegisterUserPage} />
            </Switch>
        </BrowserRouter>
    )
}