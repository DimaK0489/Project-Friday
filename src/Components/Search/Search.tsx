import React, {ChangeEvent, useCallback, useState} from 'react'
import style from './Search.module.css'
import {useDispatch} from 'react-redux'
import {getCardsPackTC, setSearchNameAC} from "../Pack/packsReducer";

export const Search = () => {
    const dispatch = useDispatch()

    const [inputValue, setInputValue] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }

    const onSubmit = useCallback(() => {
        inputValue ? dispatch(setSearchNameAC(inputValue)) : dispatch(getCardsPackTC(5))
        setInputValue("")
    }, [dispatch, inputValue])

    return (
        <div>
            <input className={style.searchInput}
                   onChange={onChange}
                   value={inputValue}
                   type="text"
                   placeholder="Search name"
                   autoFocus>

            </input>
            <button type="submit"
                    onClick={onSubmit}
                    className={style.searchButton}>
                Search
            </button>
        </div>)
}