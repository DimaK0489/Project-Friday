import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import {Login} from "../Components/Login/Login";
import {Registration} from '../Components/Registration/Registration';
import {Profile} from '../Components/Profile/Profile';
import {PasswordReset} from '../Components/PasswordReset/PasswordReset';
import {NewPassword} from '../Components/NewPassword/NewPassword';
import SuperComponents from "../SuperComponents/SuperComponents";
import {Error404} from "../Components/Pages/Error404";
import Header from "../Components/Header/Heder";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Route path={'/login'} render={() => <Login />}/>
            <Route path={'/registration'} render={() => <Registration />}/>
            <Route path={'/passwordReset'} render={() => <PasswordReset />}/>
            <Route path={'/newPassword'} render={() => <NewPassword />}/>
            <Route path={'/profile'} render={() => <Profile />}/>
            <Route path={'/404'} render={() => <Error404 />}/>
            <Route path={'/test'} render={() => <SuperComponents />}/>
        </div>
    );
}

export default App;
