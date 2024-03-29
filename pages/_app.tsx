import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }: AppProps) {

  const dChainId = process.env.NODE_ENV == "production" ? ChainId.Polygon : ChainId.Mumbai;

  return (
    <ThirdwebProvider desiredChainId={dChainId}>
      <Component {...pageProps} />
      <Toaster />
    </ThirdwebProvider>
  )
}

export default MyApp
