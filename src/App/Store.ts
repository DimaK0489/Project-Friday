import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from "redux-thunk";
import {oneReducer} from "../Reducers/oneReducer";
import { twoReducer } from '../Reducers/twoReducer';
import {threeReducer} from "../Reducers/threeReducer";
import {fourReducer} from "../Reducers/fourReducer";
import {fiveReducer} from "../Reducers/fiveReducer";


const rootReducer = combineReducers({
    "one": oneReducer,
    "two": twoReducer,
    "three": threeReducer,
    "four": fourReducer,
    "five": fiveReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;
export default store;