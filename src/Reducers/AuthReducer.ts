import {Dispatch} from "redux";
import {setDataResponseAC, setLoginDataAC, setResponseErrorAC, setResponseTokenAC} from "../Components/Login/LoginReducer";
import {ErrorDataType, projectAPI} from "../api/projectAPI";
import {setAppStatusAC} from "../App/App_reducer";

export enum ACTION_TYPES {
    IS_AUTH = "IS_AUTH"
}

export type ProfileActionsType = ReturnType<typeof setIsAuth>

let initialState = {
    isAuth: false
};

type InitialStateType = typeof initialState;

export const authReducer = (state: InitialStateType = initialState, action: ProfileActionsType): InitialStateType => {
    switch (action.type) {
        case ACTION_TYPES.IS_AUTH:
            return {
                ...state, isAuth: action.isAuth
            };
        default:
            return state
    }
}

export const setIsAuth = (isAuth: boolean) =>
    ({type: ACTION_TYPES.IS_AUTH, isAuth} as const)

export const isAuthTC = () => (dispatch: Dispatch) => {
    dispatch(setAppStatusAC('loading'))
    projectAPI.isAuth().then(res => {
            dispatch(setDataResponseAC(res.data))
            dispatch(setLoginDataAC(true))
            dispatch(setResponseTokenAC(res.data.token))
            dispatch(setAppStatusAC('succeeded'))
        }
    ).catch((error: ErrorDataType) => {
        dispatch(setResponseErrorAC(error.response.data.error))
    })
}




