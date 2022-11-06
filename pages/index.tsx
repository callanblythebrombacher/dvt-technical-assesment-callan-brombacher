import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {UserCtx, defaultUserCtx} from "../src/context/UserContext.component";
import Header from '../src/components/templates/header.component'

export default function Home() {
  return (
    <div className={styles.container}>
        <UserCtx.Provider
            value={defaultUserCtx}
        >
            <Head>
            </Head>
            <Header />
        </UserCtx.Provider>
    </div>
  )
}
