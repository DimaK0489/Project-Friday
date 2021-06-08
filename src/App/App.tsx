import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import style from './App.module.css';
import {Login} from "../Components/Login/Login";
import {Registration} from '../Components/Registration/Registration';
import {Profile} from '../Components/Profile/Profile';
import {PasswordRecovery} from '../Components/PasswordRecovery/PasswordRecovery';
import {NewPassword} from '../Components/NewPassword/NewPassword';
import {Header} from "../Components/Header/Heder";
import {Preloader} from "../Components/common/Preloder/preloder";
import {useSelector} from 'react-redux';
import {AppRootStateType} from "./Store";
import {Pack} from '../Components/Pack/Packs';
import { Error404 } from '../Components/Pages/Error404';

export const PATH = {
    login: '/login',
    registration: '/registration',
    profile: '/profile',
    Error404: '/404',
    passwordRecovery: '/passwordRecovery',
    newPassword: '/newPassword',
    test: '/test',
    pack: '/pack'
}

export const App = () => {
    const status = useSelector<AppRootStateType, string>(state => state.app.status)
    return (
        <div className={style.app}>
            <div className={style.navBar}><Header/></div>
            {status === 'loading' && <div className={style.preLoader}> <Preloader/></div>}
            <Switch>
                <Route path={PATH.login} render={() => <Login/>}/>
                <Route path={PATH.registration} render={() => <Registration/>}/>
                <Route path={PATH.passwordRecovery} render={() => <PasswordRecovery/>}/>
                <Route path={PATH.newPassword} render={() => <NewPassword/>}/>
                <Route path={PATH.profile} render={() => <Profile/>}/>
                <Route path={PATH.pack} render={() => <Pack />} />
                <Route path={PATH.Error404} render={() => <Error404/>}/>
                <Redirect from={'*'} to={'/404'}/>
            </Switch>
        </div>
    );
}


