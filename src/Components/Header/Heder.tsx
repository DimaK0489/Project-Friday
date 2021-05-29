import React from "react";
import {NavLink} from "react-router-dom";
import style from "./Header.module.css";

type HeaderPropsType = {}

function Header(props: HeaderPropsType) {
    return (
        <header className={style.header}>
            <div className={style.loginBlock}>
                <NavLink to={"/login"}>Login</NavLink>
                <NavLink to={"/registration"}>Registration</NavLink>
                <NavLink to={"/passwordReset"}>PasswordReset</NavLink>
                <NavLink to={"/newPassword"}>NewPassword</NavLink>
                <NavLink to={"/profile"}>Profile</NavLink>
                <NavLink to={"/404"}>Error404</NavLink>
                <NavLink to={"/test"}>SuperComponents</NavLink>
            </div>
        </header>
    );
}

export default Header;