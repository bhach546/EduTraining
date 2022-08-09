import React from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from '../Pages/Login'
import Dashboard from '../Pages/Dashboard'

const AppRouter = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route
                    path='/'
                    component={Login}
                    exact
                />
                <Route
                    path='/dashboard'
                    component={Dashboard}
                />
                <Route
                    path='/'
                    component='NotFound'
                />
            </Switch>
        </BrowserRouter>
    )
}
export default AppRouter