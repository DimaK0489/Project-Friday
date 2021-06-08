import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import {loginReducer, LoginReducerActionType} from "../Reducers/LoginReducer";
import {registrationReducer, RegistrationReducerActionsType} from "../Reducers/RegistrationReducer";
import {passwordRecoveryReducer, PasswordRecoveryReducerActionsType} from "../Reducers/PasswordRecoveryReducer";
import {authReducer, ProfileActionsType} from '../Reducers/AuthReducer';
import {appReducer, AppReducerActionType} from "../Reducers/App_reducer";
import {CardsPackActionType, cardsReducer } from '../Reducers/CardsReducer';

const  rootReducer = combineReducers({
    login: loginReducer,
    registration: registrationReducer,
    passwordRecovery: passwordRecoveryReducer,
    app: appReducer,
    isAuth: authReducer,
    cards: cardsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppThunk = ThunkAction<void, AppRootStateType, unknown, AppActionType>
type AppActionType = AppReducerActionType | ProfileActionsType | CardsPackActionType | LoginReducerActionType | PasswordRecoveryReducerActionsType | RegistrationReducerActionsType;

export default store;