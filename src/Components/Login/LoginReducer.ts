import {Dispatch} from "redux";
import {ErrorDataType, LoginType, projectAPI, ResponseType} from "../../api/projectAPI";
import {setAppStatusAC} from "../../App/App_reducer";

export const initialState = {
    isLoggedIn: false,
    dataLogin: {
        _id: "",
        email: "",
        name: "",
        avatar: null as string | null,
        publicCardPacksCount: 0,
        created: "",
        updated: "",
        isAdmin: false,
        verified: false,
        rememberMe: false,
        error: ""
    },
    responseError: "",
    token: ''
}

export const loginReducer = (state: InitialStateLoginType = initialState, action: LoginReducerActionType): InitialStateLoginType => {
    switch (action.type) {
        case "LOGIN/SET-LOGIN-DATA":
            return {...state, isLoggedIn: action.value}
        case "LOGIN/SET-DATA":
            return {...state, dataLogin: action.data}
        case "LOGIN/SET-RESPONSE-ERROR":
            return {...state, responseError: action.responseError}
        case 'LOGIN/SET-RESPONSE-TOKEN':
            return {...state, token: action.token}
        default:
            return state
    }
}

//Action
export const setLoginDataAC = (value: boolean) =>
    ({type: "LOGIN/SET-LOGIN-DATA", value} as const)
export const setDataResponseAC = (data: ResponseType) =>
    ({type: "LOGIN/SET-DATA", data} as const)
export const setResponseErrorAC = (responseError: string) =>
    ({type: "LOGIN/SET-RESPONSE-ERROR", responseError} as const)
export const setResponseTokenAC = (token: string) =>
    ({type: "LOGIN/SET-RESPONSE-TOKEN", token} as const)

//Thunks
export const loginTC = (data: LoginType) => (dispatch: Dispatch) => {
    dispatch(setAppStatusAC('loading'))
    projectAPI.login(data)
        .then((res) => {
            dispatch(setLoginDataAC(true))
            dispatch(setDataResponseAC(res.data))
            dispatch(setResponseTokenAC(res.data.token))
            dispatch(setAppStatusAC('succeeded'))
        })
        .catch((error: ErrorDataType) => {
            dispatch(setResponseTokenAC(error.response.data.error))
            dispatch(setAppStatusAC('succeeded'))
        })
}
export const logoutTC = () => (dispatch: Dispatch) => {
    dispatch(setAppStatusAC('loading'))
    projectAPI.logout()
        .then((res) => {
            dispatch(setLoginDataAC(false))
            dispatch(setAppStatusAC('succeeded'))
        })
        .catch((error: ErrorDataType) => {
            dispatch(setResponseErrorAC(error.response.data.error))
            dispatch(setAppStatusAC('succeeded'))
        })
}

//Types
export type LoginReducerActionType =
    ReturnType<typeof setLoginDataAC>
    | ReturnType<typeof setDataResponseAC>
    | ReturnType<typeof setResponseErrorAC>
    | ReturnType<typeof setResponseTokenAC>

export type InitialStateLoginType = typeof initialState

