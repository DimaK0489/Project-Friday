import {Dispatch} from "redux";

//types
export type ActionType = ReturnType<typeof test4>

let initialState = {}

export const fourReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "":
            return {...state}

        default:
            return state
    }
}

//action
export const test4 = () =>
    ({type: ""} as const)

//Thunks
export const testTC = () => (dispatch: Dispatch<ActionType>) => {

}