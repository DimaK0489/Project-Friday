import {AppThunk} from "../App/Store";
import {Dispatch} from "redux";
import {setAppStatusAC} from "./App_reducer";
import {cardsPackAPI} from "../api/projectAPI";

export enum ACTION_TYPES {
    GET_CARDS_PACK = 'GET_CARDS_PACK'
}

const initialState = {
    cardPacks: [
        {
            _id: '',
            user_id: '',
            name: '',
            cardsCount: 0,
            created: '',
            updated: ''
        }
    ],
    cardPacksTotalCount: 0,
    maxCardsCount: 0,
    minCardsCount: 0,
    page: 0,
    pageCount: 0
}

export type InitialCardsStateType = typeof initialState;

export const cardsReducer = (state: InitialCardsStateType = initialState, action: CardsPackActionType): InitialCardsStateType => {
    switch (action.type) {
        case ACTION_TYPES.GET_CARDS_PACK:
            return {
                ...state, cardPacks: action.data.cardPacks.map(pack => ({...pack}))
            }
        default:
            return state
    }
}

export const getAllCardsPackAC = (data: InitialCardsStateType) =>
    ({type: ACTION_TYPES.GET_CARDS_PACK, data})

export const getCardsPackTC = () => (dispatch: Dispatch) => {
    dispatch(setAppStatusAC('loading'))
    cardsPackAPI.getCardsPack()
        .then(res => {
            dispatch(getAllCardsPackAC(res.data))
            dispatch(setAppStatusAC('succeeded'))
        })
        .catch(err => {
            dispatch(setAppStatusAC('succeeded'))
        })
}

export const createCardsPackTC = (cardsPack: any): AppThunk => dispatch => {
    dispatch(setAppStatusAC('loading'))
    cardsPackAPI.createCardsPack(cardsPack)
        .then(res => {
            dispatch(getCardsPackTC())
            dispatch(setAppStatusAC('succeeded'))
        })
        .catch(err => {
            dispatch(setAppStatusAC('succeeded'))
        })
}

export const deleteCardsPackTC = (packsId: string): AppThunk => dispatch => {
    dispatch(setAppStatusAC('loading'))
    cardsPackAPI.deleteCardsPack(packsId)
        .then(res => {
            dispatch(getCardsPackTC())
            dispatch(setAppStatusAC('succeeded'))
        })
        .catch(err => {
            dispatch(setAppStatusAC('succeeded'))
        })
}

export type CardsPackActionType = ReturnType<typeof getAllCardsPackAC>