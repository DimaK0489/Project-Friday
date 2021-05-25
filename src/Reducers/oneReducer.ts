import {Dispatch} from "redux";


export type ActionType = ReturnType<typeof test>

let initialState = {}

export const oneReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "":
            return {...state}

        default:
            return state
    }
}

//action
export const test = () =>
    ({type: ""} as const)

//Thunks
export const testTC = () => (dispatch: Dispatch<ActionType>) => {

}