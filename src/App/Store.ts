import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from "redux-thunk";
import {loginReducer} from "../Reducers/LoginReducer";
import {registrationReducer} from "../Reducers/RegistrationReducer";
import {passwordRecoveryReducer} from "../Reducers/PasswordRecoveryReducer";


const rootReducer = combineReducers({
    login: loginReducer,
    registration: registrationReducer,
    passwordRecovery: passwordRecoveryReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;
export default store;