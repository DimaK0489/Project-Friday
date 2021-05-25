import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import {Login} from "../Components/Login/Login";
import {Registration} from '../Components/Registration/Registration';
import {Profile} from '../Components/Profile/Profile';
import {PasswordReset} from '../Components/PasswordReset/PasswordReset';
import {NewPassword} from '../Components/NewPassword/NewPassword';
import SuperComponents from "../SuperComponents/SuperComponents";

const App = () => {
    return (
        <div className="App">
            <Route path={'/login'} render={() => <Login />}/>
            <Route path={'/registration'} render={() => <Registration />}/>
            <Route path={'/profile'} render={() => <Profile />}/>
            <Route path={'/404'} render={() => <h1 style={{textAlign: "center"}}>404.Page not found</h1>}/>
            <Route path={'/passwordReset'} render={() => <PasswordReset />}/>
            <Route path={'/newPassword'} render={() => <NewPassword />}/>
            <Route path={'/test'} render={() => <SuperComponents />}/>
        </div>
    );
}

export default App;
