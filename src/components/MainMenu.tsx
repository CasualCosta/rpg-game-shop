import React, { useContext } from 'react'
import { AppContext } from '../context'

const MainMenu = () => {
    const {state, dispatch} = useContext(AppContext)
    // dispatch({type: "reset"})
    const buttonStyles = 'bg-red-400 text-white py-2 w-24 text-xl rounded hover:scale-110'
    return (
        <div className='h-5/6 flex items-center justify-center gap-4'>
            <button
                className={buttonStyles}
                onClick={() => dispatch({type: "open_buy"})}
            >
                Buy
            </button>
            <button
                className={buttonStyles}
                onClick={() => dispatch({type: "open_sell"})}
            >
                Sell
            </button>
        </div>
    )
}

export default MainMenu