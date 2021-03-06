import React, {useCallback} from 'react'
import {useDispatch} from 'react-redux'
import style from './LogOut.module.css'
import {logoutTC} from "../Login/LoginReducer";


export const LogOut= () => {
    const dispatch = useDispatch()
    const logoutHandler = useCallback(() => {
        dispatch(logoutTC())
    }, [dispatch])

    return <>
        <button className={style.logoutButton} onClick={logoutHandler}>LOGOUT</button>
    </>
}