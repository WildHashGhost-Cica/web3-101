import React from 'react'
import { useMoralis } from 'react-moralis'

function ChangeUsername() {

    const { setUserData, isUserUpdating, userError, user} = useMoralis();

    const setUsername =()=>{
        const username = prompt(
            `Enter your new Username (current: ${user.getUsername()})`
        );

        if (!username) return;

        setUserData({
            username,
        });
    }

    return (
        <div className='text-sm text-white absolute top-32 right-24'>
            <button 
            disabled={isUserUpdating}
            onClick={setUsername}
            className='hover:text-blue-400'>Change your Username</button>
        </div>
    )
}

export default ChangeUsername
