import React from 'react';
import style from './Login.module.css';
import {useDispatch, useSelector} from "react-redux";
import { Redirect } from 'react-router-dom';
import {AppRootStateType} from "../../App/Store";

export const Login = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector<AppRootStateType, boolean>( state => state.login.isLoggedIn)
    if (!isLoggedIn) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div className={style.main}>
            <div className={style.mainBlock}>
                <div className={style.title}>
                    It-incubator
                </div>
                <div className={style.subTitle}>
                    Sign In
                </div>
                <form className={style.form}>
                    <div className={style.formInput}>
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className={style.formInput}>
                        <input type="password" placeholder='Enter your password' />
                    </div>
                    <div className={style.forgotPassword}>
                        <input type={"checkbox"} name={"RememberMe"}/> RememberMe
                    </div>
                    <div>
                        <button className={style.loginButton} >Login</button>
                    </div>
                </form>

                <div className={style.askAboutAccount}>
                    <span>Don’t have an account?</span>

                </div>
                <div className={style.singUp}>
                    <span>Sign Up</span>
                </div>
            </div>

        </div>
    );
}