import React from "react";
import {NavLink} from "react-router-dom";
import style from "./Header.module.css";

export const Header = () => {
    return (
        <div className={style.navigation}>
            <div className={`${style.item} ${style.active}`}>
                <NavLink to={"/registration"} activeClassName={style.activeLink}>Registration</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={"/login"} activeClassName={style.activeLink}>Login</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={"/profile"} activeClassName={style.activeLink}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={"/passwordRecovery"} activeClassName={style.activeLink}>PasswordRecovery</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={`/newPassword/`} activeClassName={style.activeLink}>NewPassword</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={`/pack/`} activeClassName={style.activeLink}>Pack</NavLink>
            </div>
        </div>
    );
}

