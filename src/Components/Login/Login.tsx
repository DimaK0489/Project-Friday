import React, {ChangeEvent, useState} from 'react';
import style from './Login.module.css';
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from 'react-router-dom';
import {AppRootStateType} from "../../App/Store";
import {loginTC} from "../../Reducers/LoginReducer";

export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false)
    const [error, setError] = useState("")

    const dispatch = useDispatch()
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)
    const responseError = useSelector<AppRootStateType, string>(state => state.login.responseError)

    if (isLoggedIn) {
        return <Redirect to={"/profile"}/>
    }

    const setUserData = () => {
        if(email === "" || password === "") {
            setError("Enter email and password")
        }else {
            dispatch(loginTC({email, password, rememberMe}))
        }

    }
    const onSetUpEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget.value)
    }
    const onSetUpPassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.currentTarget.value)
    }
    const onSetUpRememberMe = (event: ChangeEvent<HTMLInputElement>) => {
        setRememberMe(event.currentTarget.checked)
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
                <div className={style.form}>
                    <div className={style.formInput}>
                        <input type="email" placeholder='Enter your email' onChange={onSetUpEmail}/>
                    </div>
                    <div className={style.formInput}>
                        <input type="password" placeholder='Enter your password' onChange={onSetUpPassword}/>
                    </div>
                    <div className={style.forgotPassword}>
                        <input type={"checkbox"} checked={rememberMe} onChange={onSetUpRememberMe}/>RememberMe
                    </div>
                    <span className={style.formError}>{error ? error : responseError}</span>
                    <div>
                        <button className={style.loginButton} onClick={setUserData}>Login</button>
                    </div>
                </div>

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