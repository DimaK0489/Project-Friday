import React, {ChangeEvent, useState} from 'react'
import style from './Registartion.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../App/Store";
import {Redirect} from "react-router-dom";
import {registrationTC, setResponseError} from "../../Reducers/RegistrationReducer";
import {PATH} from "../../App/App";

export const Registration = () => {
    const isRegistration = useSelector<AppRootStateType, boolean>(state => state.registration.isRegistration)
    const responseError = useSelector<AppRootStateType, string>(state => state.registration.responseError)

    const dispatch = useDispatch();
    let [email, setEmail] = useState<string>('')
    let [password, setPassword] = useState<string>('')
    let [confirmPassword, setConfirmPassword] = useState<string>('')
    let [error, setError] = useState<string>('');

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

    const setRegistrationData = () => {
        if (password === confirmPassword) {
            dispatch(registrationTC({ email, password }))
            setEmail('')
            setPassword('')
            setConfirmPassword('')
            setError('')
        } else {

            setPassword('')
            setConfirmPassword('')
            setError('Пароль не совпадает')
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
                    <div className={style.formInput}>
                        <input type="password" placeholder='Enter your password' value={password} onChange={onChangePassword} />
                    </div>
                    <div className={`${style.formInput} ${style.formInputLastChild}`}>
                        <input type="password" placeholder='Confirm your password' value={confirmPassword} onKeyPress={onKeyPressHandler} onChange={onChangeConfirmPassword} />
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