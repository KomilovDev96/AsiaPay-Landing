import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Navbar from './../components/Navbar';
import Header from './../components/Header';
import About from '../components/About';
import Service from '../components/Service';
import Category from '../components/Category';
import Manual from '../components/Manual';
import Login from '../components/Login';
import Questions from '../components/Questions';
import Footer from '../components/Footer';
import Script from 'next/script';
import { motion } from 'framer-motion';

export default function Home() {

  return (
    <motion.div
      animate="active"
      initial="inactive"
      style={{ overflow: "hidden" }}
    >
      <Script
        id="stripe-js"
        src="https://js.stripe.com/v3/"
        onLoad={() => {
          console.log('Loaded');
        }}
      />
      <Head>
        <title>AsiaPay</title>
        <meta name="description" content="Generated by AsiaPay's team" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Navbar />
      <Header />
      <About />
      <Service />
      <Category />
      <Manual />
      <Login />
      <Questions />
      <Footer />
    </motion.div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      // Will be passed to the page component as props
    },
  };
}