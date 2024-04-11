import React, { useContext } from 'react'
import { AppContext } from '../context'
import Calculator from './Calculator'
import Description from './Description'
import { FaAngleLeft, FaAngleRight, FaAnglesLeft, FaAnglesRight } from 'react-icons/fa6'

const BuyWindow = () => {
    const {state, dispatch} = useContext(AppContext)
    return (
        <div className='flex h-5/6 gap-2 mt-2 mx-4'>
            <div className='py-4 w-4/6 flex flex-col rounded bg-red-400 text-white text-xl h-full text-center'>
                <div className='flex gap-8 justify-between uppercase px-8 py-2'>
                    <p className='w-3/6 text-left'>Name</p>
                    <p className='w-1/6'>Price</p>
                    <p className='w-1/6'>Amount</p>
                    <p className='w-1/6'>Owned</p>
                </div>
                {state.items.map((item, i) => {
                    return <div 
                        key={i} 
                        className={`flex px-8 py-2 gap-8 justify-between ${i % 2 === 0 ? "bg-white/10" : ""}`}
                        onMouseEnter={() => dispatch({type: "update_description", payload: item})}
                        onMouseLeave={() => dispatch({type: "update_description", payload: null})}
                    >
                        <p className='w-3/6 text-left'>{item.name}</p>
                        <p className='w-1/6'>{item.price}</p>
                        <div className='flex gap-1 w-1/6 justify-center'>
                        <button onClick={() => dispatch({type: "decrement_ten", payload: item})}>
                                <FaAnglesLeft />
                            </button>
                            <button onClick={() => dispatch({type: "decrement_single", payload: item})}>
                                <FaAngleLeft />
                            </button>
                            <p>{item.shopAmount.toString().padStart(2, "0")}</p>
                            <button onClick={() => dispatch({type: "increment_single", payload: item})}>
                                <FaAngleRight />
                            </button>
                            <button onClick={() => dispatch({type: "increment_ten", payload: item})}>
                                <FaAnglesRight />
                            </button>
                        </div>
                        <p className='w-1/6 text-center'>{item.inventoryAmount.toString().padStart(2, "0")}</p>
                    </div>
                })}
            </div>
            <div className='flex-col flex-grow rounded gap-8 '>
                <Calculator />
                <Description />
            </div>
        </div>
    )
}

export default BuyWindow