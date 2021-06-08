import React, {useEffect} from 'react'
import style from "./Profile.module.css"
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from "../../App/Store";
import {Redirect} from "react-router-dom";
import {PATH} from "../../App/App";
import {isAuthTC} from "../../Reducers/AuthReducer";
import { LogOut } from '../LogOut/LogOut';

type DataLoginType = {
    _id: string,
    email: string,
    name: string
    avatar: string | null,
    publicCardPacksCount: number,
    created: string
    updated: string
    isAdmin: boolean
    verified: boolean
    rememberMe: boolean
    error: string
}

export const Profile = () => {
    const dispatch = useDispatch();
    const userData = useSelector<AppRootStateType, DataLoginType>(state => state.login.dataLogin)
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)

    useEffect(() => {
        if (!userData.created) {
            dispatch(isAuthTC());
        }
    }, [dispatch])
    if (!isAuth) {
        return <Redirect to={PATH.login}/>
    }
    return (
        <div className={style.main}>
            {JSON.stringify(userData)}
            <button><LogOut/></button>
        </div>
    );
}

