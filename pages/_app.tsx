import '../styles/global.css'
import Component from 'next'


interface AppProps{
  Component: any,
  pageProps: any
}

export default function App ({ Component, pageProps } : AppProps): JSX.Element {
    return <Component {...pageProps} />
  }