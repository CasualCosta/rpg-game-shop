import React, { useContext } from 'react'
import { AppContext } from '../context'
import MainMenu from './MainMenu'
import BuyWindow from './BuyWindow'

const Body = () => {
    const {state, dispatch} = useContext(AppContext)
    if(state.window === "main"){
        return <MainMenu />
    }

    if(state.window === "buy" || state.window === "sell"){
        return <BuyWindow />
    }
    throw new Error("Unhandled exception.")
}

export default Body