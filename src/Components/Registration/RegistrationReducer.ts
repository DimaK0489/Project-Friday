import {Dispatch} from "redux";
import {ErrorDataType, projectAPI, RegistrationDataType} from "../../api/projectAPI";
import {setAppStatusAC} from "../../App/App_reducer";

export enum AUTH_ACTIONS_TYPE {
    SET_REGISTRATION_DATA = "SET_REGISTRATION_DATA",
    SET_RESPONSE_ERROR = "SET_RESPONSE_ERROR"
}

let initialState = {
    isRegistration: false,
    responseError: ''
}

type InitialStateType = typeof initialState;

export const registrationReducer = (state: InitialStateType = initialState, action: RegistrationReducerActionsType): InitialStateType => {
    switch (action.type) {
        case AUTH_ACTIONS_TYPE.SET_REGISTRATION_DATA:
            return {...state, isRegistration: action.isRegistration}
        case AUTH_ACTIONS_TYPE.SET_RESPONSE_ERROR:
            return {...state, responseError: action.responseError}
        default:
            return {...state};
    }
}

// Actions
export const setRegistrationData = (isRegistration: boolean) =>
    ({type: AUTH_ACTIONS_TYPE.SET_REGISTRATION_DATA, isRegistration} as const)
export const setResponseError = (responseError: string) =>
    ({type: AUTH_ACTIONS_TYPE.SET_RESPONSE_ERROR, responseError} as const)

//Thunks
export const registrationTC = (data: RegistrationDataType) => (dispatch: Dispatch) => {
    dispatch(setAppStatusAC('loading'))
    projectAPI.registration(data)
        .then(res => {
            dispatch(setRegistrationData(true))
            dispatch(setAppStatusAC('succeeded'))
        })
        .catch((error: ErrorDataType) => {
            dispatch(setResponseError(error.response.data.error))
            dispatch(setAppStatusAC('succeeded'))
        })
}

export type RegistrationReducerActionsType =
    ReturnType<typeof setRegistrationData> |
    ReturnType<typeof setResponseError>


