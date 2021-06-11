import React, {ChangeEvent, useState} from 'react'
import style from './Registartion.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../App/Store";
import {Redirect} from "react-router-dom";
import {registrationTC, setResponseError} from "./RegistrationReducer";
import {PATH} from "../../App/App";

export const Registration = () => {
    const dispatch = useDispatch();
    const isRegistration = useSelector<AppRootStateType, boolean>(state => state.registration.isRegistration)
    const responseError = useSelector<AppRootStateType, string>(state => state.registration.responseError)
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [error, setError] = useState<string>('')
    const [typePassword, setTypePassword] = useState<string>('password')
    const [typeConfirmPassword, setTypeConfirmPassword] = useState<string>('password')

    const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget.value)
    }
    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.currentTarget.value)
    }
    const onChangeConfirmPassword = (event: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.currentTarget.value)
    }
    const onKeyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.charCode === 13) {
            setRegistrationData()
        }
    }
    const onClickTypePassword = () => {
        if (typePassword === 'password') {
            setTypePassword('text')
        } else if (typePassword === 'text') {
            setTypePassword('password')
        }
    }

    const onClickTypeConfirmPassword = () => {
        if (typeConfirmPassword === 'password') {
            setTypeConfirmPassword('text')
        } else if (typeConfirmPassword === 'text') {
            setTypeConfirmPassword('password')
        }
    }

    const setRegistrationData = () => {
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            setError('Incorrect password')
        } /*else if (!/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/i.test(password)) {
            setError('Incorrect password')
        }*/ else {
            if (password === confirmPassword) {
                dispatch(registrationTC({ email, password }))
                setEmail('')
                setPassword('')
                setConfirmPassword('')
                setError('')
            } else {
                setPassword('')
                setConfirmPassword('')
                setError('Password does not match')
            }
        }
    }
    const onChangeCancel = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        setError('')
        dispatch(setResponseError(''))
    }

    if (isRegistration) {
        return <Redirect to={PATH.login} />
    }
    if (isAuth) {
        return <Redirect to={PATH.profile} />
    }
    return (
        <div className={style.main}>
            <div className={style.mainBlock}>
                <div className={style.title}>
                    It-incubator
                </div>
                <div className={style.subTitle}>
                    Sign Up
                </div>
                <div className={style.form}>
                    <div className={style.formInput}>
                        <input type="email" placeholder='Enter your email' value={email} onChange={onChangeEmail} />
                    </div>
                    <div className={`${style.formInput}`}>
                        <input type={typePassword} placeholder='Enter your password' value={password} onChange={onChangePassword} />
                        <span className={style.photoEye} onClick={onClickTypePassword}/>
                    </div>
                    <div className={`${style.formInput} ${style.formInputLastChild}`}>
                        <input type={typeConfirmPassword} placeholder='Confirm your password' value={confirmPassword} onKeyPress={onKeyPressHandler} onChange={onChangeConfirmPassword} />
                        <span className={style.photoEye} onClick={onClickTypeConfirmPassword}/>
                        <span className={style.formError}>{error ? error : responseError ? responseError : ''}</span>
                    </div>
                    <div className={style.flexButtons}>
                        <div >
                            <button className={style.cancelButton} onClick={onChangeCancel}>Cancel</button>
                        </div>
                        <div>
                            <button className={style.logisterButton} onClick={setRegistrationData}>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}