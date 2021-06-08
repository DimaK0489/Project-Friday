import {Dispatch} from "redux";
import {ErrorDataType, newPasswordTCType, PasswordRecoveryDataType, projectAPI} from "../api/projectAPI";
import {setAppStatusAC} from "./App_reducer";

export enum RECOVERY_ACTIONS_TYPE {
    SET_RECOVERY_FLAG = "SET_RECOVERY_DATA",
    SET_RESPONSE_ERROR = "SET_RESPONSE_ERROR"
}

let initialState = {
    isRecovery: false,
    responseError: ''
}

type InitialStateType = typeof initialState;

export const passwordRecoveryReducer = (state: InitialStateType = initialState, action: PasswordRecoveryReducerActionsType): InitialStateType => {
    switch (action.type) {
        case RECOVERY_ACTIONS_TYPE.SET_RECOVERY_FLAG:
            return {...state, isRecovery: action.isRecovery}
        case RECOVERY_ACTIONS_TYPE.SET_RESPONSE_ERROR:
            return {...state, responseError: action.responseError}
        default:
            return {...state};
    }
}

// Actions
export const setRecoveryFlagAC = (isRecovery: boolean) =>
    ({type: RECOVERY_ACTIONS_TYPE.SET_RECOVERY_FLAG, isRecovery} as const)
export const setResponseErrorPassword = (responseError: string) =>
    ({type: RECOVERY_ACTIONS_TYPE.SET_RESPONSE_ERROR, responseError} as const)

//Thunks
export const passwordRecoveryTC = (recoveryData: PasswordRecoveryDataType) => (dispatch: Dispatch) => {
    dispatch(setAppStatusAC('loading'))
    projectAPI.passwordRecovery(recoveryData)
        .then(res => {
            dispatch(setRecoveryFlagAC(true))
            dispatch(setAppStatusAC('succeeded'))
        })
        .catch((error: ErrorDataType) => {
            dispatch(setResponseErrorPassword(error.response.data.error))
            dispatch(setAppStatusAC('succeeded'))
        })
}
export const setNewPasswordTC = (data: newPasswordTCType) => (dispatch: Dispatch) => {
    dispatch(setAppStatusAC('loading'))
    projectAPI.setNewPassword(data)
        .then(res => {
            dispatch(setAppStatusAC('succeeded'))
        })
        .catch((error: ErrorDataType) => {
            dispatch(setResponseErrorPassword(error.response.data.error))
            dispatch(setAppStatusAC('succeeded'))
        })
}
// Types
export type PasswordRecoveryReducerActionsType =
    ReturnType<typeof setRecoveryFlagAC> |
    ReturnType<typeof setResponseErrorPassword>


