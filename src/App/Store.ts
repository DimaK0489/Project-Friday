import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import {loginReducer, LoginReducerActionType} from "../Components/Login/LoginReducer";
import {registrationReducer, RegistrationReducerActionsType} from "../Components/Registration/RegistrationReducer";
import {passwordRecoveryReducer, PasswordRecoveryReducerActionsType} from "../Components/PasswordRecovery/PasswordRecoveryReducer";
import {authReducer, ProfileActionsType} from '../Reducers/AuthReducer';
import {appReducer, AppReducerActionType} from "./App_reducer";
import {CardsPackActionType, packsReducer} from "../Components/Pack/packsReducer";
import {CardsActionType, cardsReducer} from "../Components/Cards/CardsReducer";
import {SearchActionType} from "../Components/Search/searchReducer";


const  rootReducer = combineReducers({
    login: loginReducer,
    registration: registrationReducer,
    passwordRecovery: passwordRecoveryReducer,
    app: appReducer,
    isAuth: authReducer,
    packs: packsReducer,
    cards: cardsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppThunk = ThunkAction<void, AppRootStateType, unknown, AppActionType>
type AppActionType = AppReducerActionType
    | ProfileActionsType
    | CardsPackActionType
    | LoginReducerActionType
    | PasswordRecoveryReducerActionsType
    | RegistrationReducerActionsType
    | CardsActionType
    | SearchActionType

export default store;