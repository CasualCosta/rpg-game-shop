import { FaGithub, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
    const iconSize = 40
    return (
        <div className='absolute bottom-6 right-8 text-red-400 flex gap-4'>
            <a 
                href="https://github.com/CasualCosta/rpg-game-shop" 
                target="_blank"
                className='hover:text-green-400'
            >
                <FaGithub size={iconSize} />
            </a>
            <a 
                href="https://twitter.com/CasualCosta" 
                target="_blank"
                className='hover:text-green-400'
            >
                <FaTwitter size={iconSize} />
            </a>
    </div>
  )
}

export default Footer