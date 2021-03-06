import React, {ChangeEvent, useState} from 'react'
import style from "./PasswordRecovery.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../App/Store";
import {passwordRecoveryTC, setResponseErrorPassword} from "./PasswordRecoveryReducer";
import {Redirect} from "react-router-dom";

export const PasswordRecovery = () => {
    const dispatch = useDispatch()
    const isRecovery = useSelector<AppRootStateType, boolean>(state => state.passwordRecovery.isRecovery)
    const responseError = useSelector<AppRootStateType, string>(state => state.passwordRecovery.responseError)

    const [email, setEmail] = useState<string>("")
    const [isRedirect, setRedirect] = useState<boolean>(false)

    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
        dispatch(setResponseErrorPassword(""))
    }
    const onSendEmail = () => {
        const recoveryData = {
            email: email,
            from: 'test-front-admin <ai73a@yandex.by>)',
            message: `<div style="background-color: lime; padding: 15px"> 
                        password recovery link: <a href='https://dimak0489.github.io/Project-Friday/#//newPassword/$token$'>link</a>
                      </div>`
        }
        dispatch(passwordRecoveryTC(recoveryData))
    }
    if (isRecovery) {
        return (<Redirect to={'/newPassword'} />)
    }
    const onRedirectToLogin = () => {
        setRedirect(true)
    }
    if (isRedirect) {
        return (<Redirect to={'/login'} />)
    }

    return (
        <div className={style.main}>
            <div className={style.mainBlock}>
                <div className={style.title}>
                    It-incubator
                </div>
                <div className={style.subTitle}>
                    Forgot your password?
                </div>
                <div className={style.form}>
                    <div className={style.formInput}>
                        <input type="email" placeholder='Enter your email' onChange={onChangeEmail} value={email}/>
                        <span className={style.formError}>{responseError}</span>
                    </div>
                    <p className={style.textAfterInput}>
                        Enter your email address and we will send you further instructions
                    </p>
                    <div>
                        <button className={style.mainButton} onClick={onSendEmail}>Send Instructions</button>
                    </div>
                </div>
                <div className={style.askAboutAccount} onClick={onRedirectToLogin}>
                    <span>Did you remember your password?</span>
                </div>
                <div className={style.tryLogin} onClick={onRedirectToLogin}>
                    <span>Try logging in</span>
                </div>
            </div>
        </div>);
}
