import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Mailto from './mailto'
import {Hamburger} from './hamburger'
import {FC} from 'react'

const name = 'Glyn'
export const siteTitle = 'Next.js Sample Website'

interface Props {
  // any props that come into the component
  children: any,
  home: boolean
}

export default function Layout({ children, home }: Props) {
  

  return (
    <div >
      <Head>
        
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <meta
          name="description"
          content="Glyn- Facilitateur et Consultant en langue anglaise"
          
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Glyn- Facilitateur et Consultant en langue anglaise</title>
      </Head>
      <Hamburger />
     <div className={styles.container}>
      <header className={styles.header}>
        {home ? (
          <>
           <Link href="/profile">
              <a>
            <Image
              priority
              src="/images/profile.jpg"
              
              height={144}
              width={130}
              alt={name}
            />
            </a>
            </Link>
            <h1 className={utilStyles.heading2Xl}><Link href="/profile">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h1>
            <Mailto email="someone@somewhere.com" subject="Salut" body="Tapez%20%0Avotre%20message%20ici%0A">Contactez moi</Mailto>
            <small>pour les tarifs et conditions</small>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  
                  height={108}
                  width={100}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
            <Mailto email="someone@somewhere.com" subject="Salut" body="Tapez%20votre%0Amessage%20ici%0A">Contactez moi</Mailto>
            <small>pour les tarifs et conditions</small>
          </>
        )}
      </header>
      
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/#services">
            <a>← Retournez</a>
          </Link>
        </div>
      )}
      </div>
    </div>
  )
 
}