import { useAddress } from '@thirdweb-dev/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'

const Home: NextPage = () => {

  const address = useAddress();
  console.log(address);
  
  return (
    <div className="bg-[#091B1B] min-h-screen flex flex-col">
      <Head>
        <title>Lottery DAPP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
    </div>
  )
}

export default Home
