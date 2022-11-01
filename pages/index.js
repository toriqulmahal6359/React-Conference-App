import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import HomeTable from '../components/ScrumBoard';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <Layout />
      </Head>
    </div>
  )
}
