import { useContext } from 'react'
import { AppContext } from '../context'
import Calculator from './Calculator'
import Description from './Description'
import { FaAngleLeft, FaAngleRight, FaAnglesLeft, FaAnglesRight } from 'react-icons/fa6'

const BuyWindow = () => {
    const {state, dispatch} = useContext(AppContext)
    const items = state.window === "buy" ?
        state.items :
        state.items.filter(item => item.inventoryAmount > 0)
    return (
        <div className='flex flex-col md:flex-row h-5/6 md:h-4/5 gap-2 mt-2 mx-4 overflow-x-auto'>
            <div className='py-4 w-full md:w-4/6 flex flex-col rounded bg-red-400 text-white text-xl h-80 md:h-full text-center overflow-auto'>
                <div className='flex gap-2 md:gap-8 justify-between uppercase px-2 md:px-8 md:py-2'>
                    <p className='min-w-36 text-left '>Name</p>
                    <p className='min-w-20'>Price</p>
                    <p className='min-w-36'>Amount</p>
                    <p className='min-w-24'>Owned</p>
                </div>
                {items.map((item, i) => {
                    return <div 
                        key={i} 
                        className={`flex px-2 md:px-8 py-2 gap-2 md:gap-8 justify-between hover:text-green-300 ${i % 2 === 0 ? "bg-white/10" : ""}`}
                        onMouseEnter={() => dispatch({type: "update_description", payload: item})}
                        onMouseLeave={() => dispatch({type: "update_description", payload: null})}
                    >
                        <p className='min-w-36 text-left'>{item.name}</p>
                        <p className='min-w-20'>{item.price}</p>
                        <div className='flex min-w-36 justify-center items-center scale-75 md:scale-100'>
                            <button className='scale-75 hover:scale-90' onClick={() => dispatch({type: "decrement_ten", payload: item})}>
                                <FaAnglesLeft />
                            </button>
                            <button className='scale-75 hover:scale-90' onClick={() => dispatch({type: "decrement_single", payload: item})}>
                                <FaAngleLeft />
                            </button>
                            <p className='text-center'>{item.shopAmount.toString().padStart(2, "0")}</p>
                            <button className='scale-75 hover:scale-90' onClick={() => dispatch({type: "increment_single", payload: item})}>
                                <FaAngleRight />
                            </button>
                            <button className='scale-75 hover:scale-90' onClick={() => dispatch({type: "increment_ten", payload: item})}>
                                <FaAnglesRight />
                            </button>
                        </div>
                        <p className='min-w-24 text-center'>{item.inventoryAmount.toString().padStart(2, "0")}</p>
                    </div>
                })}
            </div>
            <div className='flex-col flex-grow rounded gap-8'>
                <Calculator />
                <Description />
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default BuyWindow