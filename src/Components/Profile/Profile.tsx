import React from 'react'
import { useSelector } from 'react-redux';
import {AppRootStateType} from "../../App/Store";

export const Profile = () => {
    const userData = useSelector<AppRootStateType>(state => state.login.dataLogin)
    return (
        <div className="Profile">
            {JSON.stringify(userData)}
        </div>
    );
}