import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import {Login} from "../Components/Login/Login";
import {Registration} from '../Components/Registration/Registration';
import {Profile} from '../Components/Profile/Profile';
import {PasswordRecovery} from '../Components/PasswordReset/PasswordRecovery';
import {NewPassword} from '../Components/NewPassword/NewPassword';
import SuperComponents from "../SuperComponents/SuperComponents";
import {Error404} from "../Components/Pages/Error404";
import Header from "../Components/Header/Heder";

export const PATH = {
    login: '/login',
    registration: '/registration',
    profile: '/profile',
    Error404: '/404',
    passwordReset: '/passwordReset',
    newPassword: '/newPassword',
    test: '/test'
}

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route path={PATH.login} render={() => <Login/>}/>
                <Route path={PATH.registration} render={() => <Registration/>}/>
                <Route path={PATH.passwordReset} render={() => <PasswordRecovery/>}/>
                <Route path={PATH.newPassword} render={() => <NewPassword/>}/>
                <Route path={PATH.profile} render={() => <Profile/>}/>
                <Route path={PATH.Error404} render={() => <Error404/>}/>
                <Redirect from={'*'} to={'/404'}/>
                <Route path={PATH.test} render={() => <SuperComponents/>}/>
            </Switch>
        </div>
    );
}

export default App;
