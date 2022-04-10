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

          <h2 className={utils.margin_5}>Welcome back!</h2>
          <p className={utils.margin_5}>Sign in and get to it.</p>

          <label>Email</label>

          <input value='Email Address' />
          <label>Password</label>

          <input value='Password' />
          <p className={utils.text_under_input}>Forgot your password?</p>

          <button type='button' disabled>Sign In</button>

          <p>Don{`'`}t have an account? Create one now!</p>

        </section>

      </main>

      <footer className={styles.footer}>
        <p>© 2022 Rock Paper Coin</p>
      </footer>
    </>
  )
}

export default Home
