import React, { useContext } from 'react'
import { AppContext } from '../context'

const Calculator = () => {
    const {state, dispatch} = useContext(AppContext)
    const {money, sum, window} = state
    
    const lineClasses = ""
    return <div className='flex bg-red-400 h-3/6 align-center rounded-t text-end'>
        <div className='mx-auto my-auto flex-col w-3/6 h-10/12 text-2xl text-red-100'>
            <p className={lineClasses}>{money}</p>
            <p className={lineClasses}>{sum}</p>
            <hr></hr>
            <p className={lineClasses + `text-2xl text-white`}>{window === "buy" ? money - sum : money + sum}</p>
            <button 
                className='my-2 py-2 px-3 w-full bg-rose-500 rounded disabled:bg-rose-950 disabled:text-rose-700'
                disabled={money < sum && window === "buy"}
                onClick={() => dispatch({type: "checkout_buy"})}
            >
                {money < sum && window === "buy" ? "Impossible" : "Checkout"}
            </button>
        </div>
    </div>
}

export default Calculator