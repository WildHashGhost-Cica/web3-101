import Head from 'next/head'
import Login from '../components/Login'

export default function Home() {
  const isAuthenitcated = false;

  if (!isAuthenitcated) return <Login/>;
  return (
    <div className="h-screen">
      <Head>
        <title>Web3-101</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <h1>Welcome to the APP</h1>
    </div>
  )
}
