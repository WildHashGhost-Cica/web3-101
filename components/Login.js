import Image from "next/image";
import {useMoralis} from "react-moralis";

function Login() {

    const { authenticate, auth } = useMoralis();

    return (
        <div className="bg-black relative text-white">
            <h1>Login screen</h1>
            <div className="flex flex-col absolute z-50 h-5/6 w-full items-center justify-center space-y-10">
                <Image className="object-cover " src="https://cdn.discordapp.com/attachments/775345290130489374/926793774343004190/imageedit_25_2278677977.png" width={300} height={300}  />
                <button 
                    onClick={authenticate}
                className="bg-purple-900 rounded-lg p-3 font-bold animate-pulse">Login to the METAVERSE </button>
            </div>
            <div className="w-full h-screen">
                <Image src="https://cdn.discordapp.com/attachments/775345290130489374/926824039777960056/IMG_7345.jpg"
                layout="fill" objectFit="cover"
                />
            </div>
        </div>
    )
}

export default Login
