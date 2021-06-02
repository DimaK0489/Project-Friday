import {Dispatch} from "redux";
import {PasswordRecoveryDataType, projectAPI} from "../api/projectAPI";

export enum RECOVERY_ACTIONS_TYPE {
    SET_RECOVERY_FLAG = "SET_RECOVERY_DATA",
    SET_RESPONSE_ERROR = "SET_RESPONSE_ERROR"
}

let initialState = {
    isRecovery: false,
    responseError: ''
}

type InitialStateType = typeof initialState;

export const passwordRecoveryReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
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
export const setResponseErrorAC = (responseError: string) =>
    ({type: RECOVERY_ACTIONS_TYPE.SET_RESPONSE_ERROR, responseError} as const)

//Thunks
export const passwordRecoveryTC = (recoveryData: PasswordRecoveryDataType) => (dispatch: Dispatch) => {
    projectAPI.passwordRecovery(recoveryData)
        .then(res => {
            dispatch(setRecoveryFlagAC(true))
        })
        .catch((error: ErrorDataType) => {
            dispatch(setResponseErrorAC(error.response.data.error))
        })
}
// Types
type ActionsType =
    ReturnType<typeof setRecoveryFlagAC> |
    ReturnType<typeof setResponseErrorAC>

type ErrorDataType = {
    response: {
        data: ErrorRegistration
    }
}

type ErrorRegistration = {
    emailRegExp: {},
    error: string
    in: string
    isEmailValid: boolean
    isPassValid: boolean
    passwordRegExp: string
}
