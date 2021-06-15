import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import style from '../Pack/Packs.module.css';
import {OnePack} from './OnePack/OnePack';
import {Search} from "../Search/Search";
import {AppRootStateType} from "../../App/Store";
import {Range} from "../common/Range/Range";
import {createCardsPackTC,deleteCardsPackTC,getCardsPackTC,initialCardsStateType, updateCardsPackTC
} from "./packsReducer";

export const Pack = () => {
    const dispatch = useDispatch();
    const cardsFromState = useSelector<AppRootStateType, initialCardsStateType>(state => state.packs);
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
    const onClickUpdatePack = useCallback( (packId: string) => {
        dispatch(updateCardsPackTC( {
            cardsPack: {
                _id: packId,
                name: 'New Name'
            }
        }))
    }, [cardsFromState])

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
        </div>
    )
}




