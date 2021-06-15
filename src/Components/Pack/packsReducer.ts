import {AppThunk} from "../../App/Store";
import {setAppStatusAC} from '../../App/App_reducer';
import {cardsPackAPI, CardsPackUpdateType} from "../../api/projectAPI";
import {Dispatch} from "redux";

export type CardsPackActionType =
    ReturnType<typeof getAllCardsPackAC>
    | ReturnType<typeof setSearchNameAC>

export enum ACTION_TYPES {
    GET_PACKS_PACK = 'GET_PACKS_PACK',
    SET_SEARCH_PACK_NAME = 'SET_SEARCH_PACK_NAME'
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

export type initialCardsStateType = typeof initialState;

//Reducer
export const packsReducer = (state: initialCardsStateType = initialState, action: CardsPackActionType): initialCardsStateType => {
    switch (action.type) {
        case ACTION_TYPES.GET_PACKS_PACK:
            return {
                ...state, cardPacks: action.data.cardPacks.map(pack => ({...pack}))
            }
        case ACTION_TYPES.SET_SEARCH_PACK_NAME:
            return {...state, cardPacks: state.cardPacks.filter(card => card.name === action.name)}
        default:
            return state
    }
}
//Action
export const getAllCardsPackAC = (data: initialCardsStateType) => ({type: ACTION_TYPES.GET_PACKS_PACK, data}as const)
export const setSearchNameAC = (name: string) => ({type: ACTION_TYPES.SET_SEARCH_PACK_NAME, name}as const)
//Thunk
export const getCardsPackTC = () => (dispatch: Dispatch) => {
    dispatch(setAppStatusAC('loading'))
    cardsPackAPI.getCardsPack().then(res => {
        dispatch(getAllCardsPackAC(res.data))
        dispatch(setAppStatusAC('succeeded'))
    }).catch(err => {
        dispatch(setAppStatusAC('succeeded'))
    })
}

export const createCardsPackTC = (cardsPack: any): AppThunk => dispatch => {
    dispatch(setAppStatusAC('loading'))
    cardsPackAPI.createCardsPack(cardsPack).then(res => {
        dispatch(getCardsPackTC())
        dispatch(setAppStatusAC('succeeded'))
    }).catch(err => {
        dispatch(setAppStatusAC('succeeded'))
    })
}

export const deleteCardsPackTC = (packsId: string): AppThunk => dispatch => {
    dispatch(setAppStatusAC('loading'))
    cardsPackAPI.deleteCardsPack(packsId).then(res => {
        dispatch(getCardsPackTC())
        dispatch(setAppStatusAC('succeeded'))
    }).catch(err => {
        dispatch(setAppStatusAC('succeeded'))
    })
}

export const updateCardsPackTC = (cardsPack: CardsPackUpdateType): AppThunk => dispatch => {
    dispatch(setAppStatusAC('loading'))
    cardsPackAPI.updatePack(cardsPack)
        .then(res => {
            dispatch(getCardsPackTC())
            dispatch(setAppStatusAC('succeeded'))
        })
        .catch(err => {
            dispatch(setAppStatusAC('succeeded'))
        })
}

