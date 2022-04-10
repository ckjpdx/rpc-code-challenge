import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
// @ts-check

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>RPC demo page by Chris K Johnson</title>
        <meta name="description" content="Rock paper coin demo page by Chris K Johnson" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/zgf1pnx.css"></link>
      </Head>

      <main className={styles.main}>
        
        <header className={styles.header}>
            <Image 
            alt='RPC logo' 
            src='/rpc-logo.png' 
            width={168} 
            height={53}
            />
          <button>Sign Up</button>
        </header>

        <section className={styles.sign_up_wrapper}>

          <div className={styles.grid}>



          </div>

        </section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  )
}

export default Home
