import { ByMoralis, useMoralis } from 'react-moralis';
import Image from 'next/image';
import Avatar from './Avatar';
import ChangeUsername from './ChangeUsername';

function Header() {
    const {user} = useMoralis();

    return (
        <div className='sticky top-0 p-5 z-50 bg-gradient-to-l shadow-lg border-b-4 border-blue-900'>
           <div className='grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center'>
               <div className='relative h-24 w-24 mx-auto left-20 hidden
               lg:inline-grid'>
                   <Image 
                    layout="fill"
                    objectFit='cover'
                    className="rounded-full object" 
                    src="https://cdn.discordapp.com/attachments/775345290130489374/926793774343004190/imageedit_25_2278677977.png" />
               </div>
               <div className='col-span-4 text-blue-500 text-left lg:text-center' >
                   <div className='relative h-40 w-40 lg:mx-auto border-blue-500 border-4 rounded-full'>
                       <Avatar logoutOnPress/>
                   </div>
                   <h1 className='text-3xl'>Welcome to Crypto-Chat Metaverse</h1>
                   <h2 className='text-5xl font-bold truncate '>{user.getUsername()}</h2>
                   <ChangeUsername/>
               </div>
               
                  
           </div>
           <div className="sticky mt-5">
                <ByMoralis 
                variant="light"
                style={{marginLeft:'auto', marginRight:'auto'}}/>
            </div>
        </div>
    )
}

export default Header
