import * as React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import DashboardPage from '../pages/dashboard/Dashboard.page';
import LoginPage from '../pages/login/Login.page';
import HomePage from './../pages/home/Home.page';


const RouterApp: React.FunctionComponent = () => {
    return (
        <Router>
            <Switch>
                <Route strict path="/home" component={HomePage}/>
                <Route strict path="/dashboard" component={DashboardPage}/>                    
                <Route strict path="/signin" component={() => <LoginPage type='signIn'/>}/>
                <Route strict path="/signup" component={() => <LoginPage type='signUp'/>}/>
                <Route path="/" component={HomePage}/>
            </Switch>
        </Router>
    );
};

export default RouterApp;