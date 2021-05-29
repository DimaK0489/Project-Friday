import {Dispatch} from "redux";

//types
export type ActionType = ReturnType<typeof test5>

let initialState = {}

export const fiveReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "":
            return {...state}

        default:
            return state
    }
}

//action
export const test5 = () =>
    ({type: ""} as const)

//Thunks
export const testTC = () => (dispatch: Dispatch<ActionType>) => {

}