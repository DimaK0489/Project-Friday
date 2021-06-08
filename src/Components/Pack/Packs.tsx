import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import style from '../Pack/Packs.module.css';
import {OnePack} from './OnePack/OnePack';
import {AppRootStateType} from "../../App/Store";
import {createCardsPackTC, deleteCardsPackTC, getCardsPackTC, InitialCardsStateType} from "../../Reducers/CardsReducer";

export const Pack = () => {
    const dispatch = useDispatch();
    const cardsFromState = useSelector<AppRootStateType, InitialCardsStateType>(state => state.cards);
    const [titlePacks, setTitlePacks] = useState('');

    useEffect(() => {
        dispatch(getCardsPackTC())
    }, [dispatch])

    const onChangeNewTitlePacks = (event: ChangeEvent<HTMLInputElement>) => {
        setTitlePacks(event.currentTarget.value);
    }

    const cardsPack = {
        name: titlePacks
    }

    const onClickCreateCardsPack = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        dispatch(createCardsPackTC({cardsPack}));
        setTitlePacks('')
    }

    const onClickDeletePack = useCallback((packId: string) => {
        dispatch(deleteCardsPackTC(packId))
    }, [cardsFromState])

    const allPacks = cardsFromState.cardPacks.map(pack => <OnePack
        packId={pack._id}
        name={pack.name}
        cardsCount={pack.cardsCount}
        updated={pack.updated}
        onClickDeletePack={onClickDeletePack}/>
    )
    return (
        <div className={style.main}>
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
        </div>
    )
}




