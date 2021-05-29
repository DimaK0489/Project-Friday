import {Dispatch} from "redux";

//types
export type ActionType = ReturnType<typeof test3>

let initialState = {}

export const threeReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "":
            return {...state}

        default:
            return state
    }
}

//action
export const test3 = () =>
    ({type: ""} as const)

//Thunks
export const testTC = () => (dispatch: Dispatch<ActionType>) => {

}