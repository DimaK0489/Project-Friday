import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import style from '../Pack/Packs.module.css';
import {OnePack} from './OnePack/OnePack';
import {Search} from "../Search/Search";
import {AppRootStateType} from "../../App/Store";
import {Range} from "../common/Range/Range";
import {createCardsPackTC,deleteCardsPackTC,getCardsPackTC,InitialCardsStateType, updateCardsPackTC
} from "./packsReducer";
import {BasicPagination} from "../common/Paginator/Paginator";

export const Pack = () => {
    const dispatch = useDispatch();
    const cardsFromState = useSelector<AppRootStateType, InitialCardsStateType>(state => state.packs);
    const cardPacksTotalCount = useSelector<AppRootStateType, number>( state => state.packs.cardPacksTotalCount)
    const cardsPackPage = useSelector<AppRootStateType, number>( state => state.packs.page)
    const [titlePacks, setTitlePacks] = useState('');

    useEffect(() => {
        dispatch(getCardsPackTC(cardsPackPage))
    }, [dispatch])


    const onChangeNewTitlePacks = (event: ChangeEvent<HTMLInputElement>) => {
        setTitlePacks(event.currentTarget.value);
    }

    const cardsPack = {
        name: titlePacks
    }

    const onClickCreateCardsPack = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        dispatch(createCardsPackTC({cardsPack}, cardsPackPage));
        setTitlePacks('')
    }
    const onClickDeletePack = useCallback((packId: string) => {
        dispatch(deleteCardsPackTC(packId, cardsPackPage))
    }, [cardsFromState])
    const onClickUpdatePack = useCallback( (packId: string) => {
        dispatch(updateCardsPackTC( {
            cardsPack: {_id: packId,name: 'New Name'}},cardsPackPage))
    }, [cardsFromState])
    const changePagePaginator = (event: React.ChangeEvent<unknown>, page: number) => {
        dispatch(getCardsPackTC(page))
    }

    const allPacks = cardsFromState.cardPacks.map(pack => <OnePack
            packId={pack._id}
            name={pack.name}
            cardsCount={pack.cardsCount}
            updated={pack.updated}
            onClickDeletePack={onClickDeletePack}
            onClickUpdatePack={onClickUpdatePack}
        />
    )

    return (
        <div className={style.main}>
            <div className={style.components}>
                <Range/>
                <Search/>
            </div>
            <div>PacksPage</div>
            <div className={style.flexCardsTitle}>
                <div>name</div>
                <div>cardsCount</div>
                <div>updated</div>
                <div><input type="text" value={titlePacks} onChange={onChangeNewTitlePacks}/></div>
                <div>
                    <button onClick={onClickCreateCardsPack}>add</button>
                </div>
            </div>
            <div>{allPacks}</div>
            <BasicPagination page={cardsPackPage} cardPacksTotalCount={cardPacksTotalCount} onChange={changePagePaginator} />
        </div>
    )
}




