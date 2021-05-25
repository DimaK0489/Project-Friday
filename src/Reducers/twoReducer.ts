
export type ActionType = any

let initialState = {}

export const twoReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "":
            return {...state}

        default:
            return state
    }
}