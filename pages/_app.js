import '../styles/globals.css'
import { MoralisProvider } from "react-moralis";
import './app.css';

function MyApp({ Component, pageProps }) {
  return (
  <div className='bg-black opacity-80'>
  <MoralisProvider appId={process.env.NEXT_PUBLIC_APP_ID} 
  serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}>
  <Component {...pageProps} />
  </MoralisProvider>
  </div>
  )
}

export default MyApp
