import React, { useContext, useReducer } from 'react'
import { AppContext } from '../context'
import { FaCircleXmark } from 'react-icons/fa6'

const Header = () => {
    const {state, dispatch} = useContext(AppContext)
    const {window} = state
    const title = window === "main" ? "Item Shop" :
        window === "buy" ? 
        "Buy Mode" :
        "Sell Mode"
    return (
        <div className='bg-red-400 py-4 relative'>
            <p className='text-white text-center text-4xl'>{title}</p>
            {window !== "main" && <button 
                className='absolute right-12 top-4 text-teal-300 hover:text-white'
                onClick={() => dispatch({type: "close"})}
            >
                <FaCircleXmark size={40} />
            </button>}
        </div>
    )
}

export default Header