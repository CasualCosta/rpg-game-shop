import React, { useContext } from 'react'
import { AppContext } from '../context'

const Description = () => {
    const {state} = useContext(AppContext)
    if(state.descriptionItem === null)
        return (
            <div className='bg-rose-500 h-3/6 rounded-b'></div>
        )
    const {name, image, description, inventoryAmount} = state.descriptionItem
    return (
        <div className='bg-rose-500 h-3/6 rounded-b p-8 text-white'>
            <div className='w-2/3 flex-col'>
                <img src={image} className='w-24 h-24 my-4' />
                <p className='text-4xl my-2'>{name}</p>
                <p className=''>Owned: {inventoryAmount}</p>
                <p className='text-xl my-1'>{description}</p>
            </div>
        </div>
    )
}

export default Description