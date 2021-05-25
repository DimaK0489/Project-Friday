import {Dispatch} from "redux";

export type ActionType = ReturnType<typeof test2>

let initialState = {}

export const twoReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "":
            return {...state}

        default:
            return state
    }
}

//action
export const test2 = () =>
    ({type: ""} as const)

//Thunks
export const testTC = () => (dispatch: Dispatch<ActionType>) => {

}