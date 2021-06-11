import React, {useEffect} from "react";
import style from "./Cards.module.css"
import {useDispatch, useSelector} from "react-redux";
import {getCardsTC, InitialStateCards} from "./CardsReducer";
import {Search} from "../Search/Search";
import {AppRootStateType} from "../../App/Store";
import {Range} from "../common/Range/Range";

export const Cards = () => {
    const dispatch = useDispatch()
    const allCards = useSelector<AppRootStateType, InitialStateCards>(state => state.cards)

    useEffect(() => {
        dispatch(getCardsTC("")) // id
    }, [dispatch])

    return (
        <div className={style.main}>
            <div className={style.components}>
                <Range/>
                <Search/>
            </div>
            <div className={style.table}>Table Cards
                <div className={style.borderTable}>
                    <span>Question</span>
                    <span>Answer</span>
                    <span>Grade</span>
                    <span>Updated</span>
                    <span>Url</span>
                    <button>Add</button>
                </div>
            </div>

            <div className={style.bodyTable}>
                <div className={style.borderTable}>
                    {allCards.cards.map(c => c.cardsPack_id)}
                    <div>
                        <button>delete</button>
                        <button>update</button>
                    </div>
                </div>
            </div>

            {/*<div className={style.paginator}> Paginator
                <select>
                    <option value={"4"}>4</option>
                    <option value={"7"}>7</option>
                    <option value={"10"}>10</option>
                    <option value={"20"}>20</option>
                    <option value={"50"}>50</option>
                </select>
                <button>Click</button>
            </div>*/}
        </div>
    );
}