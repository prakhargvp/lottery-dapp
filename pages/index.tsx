import { useAddress, useContract } from '@thirdweb-dev/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Loading from '../components/Loading'
import Login from '../components/Login'

const Home: NextPage = () => {

  const address = useAddress();
  const { contract, isLoading } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );

  console.log(address);

  if(isLoading) return  <Loading />;
  if(!address) return <Login />;

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
