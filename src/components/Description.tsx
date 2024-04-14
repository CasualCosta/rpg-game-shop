import { useContext } from 'react'
import { AppContext } from '../context'

const Description = () => {
    const {state} = useContext(AppContext)
    if(state.descriptionItem === null)
        return (
            <div className='bg-rose-500 h-2/5 md:h-1/2 rounded-b'></div>
        )
    const {name, image, description, inventoryAmount} = state.descriptionItem
    return (
        <div className='bg-rose-500 h-2/5 md:h-1/2 rounded-b md:p-8 text-white flex justify-center items-center'>
            <div className='w-full flex flex-row justify-evenly items-center'>
                <div>
                    <img src={image} className='w-12 md:w-24 h-12 md:h-24 my-1 md:my-4' />
                </div>
                <div>
                    <p className='text-xl md:text-4xl mb-1 md:mt-1'>{name}</p>
                    <p className=''>Owned: {inventoryAmount}</p>
                    <p className='text-base md:text-xl my-1'>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Description