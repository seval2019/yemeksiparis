import Image from 'next/image'
import Head from "next/head";
import Header from '../components/layout/Header';
import Title from '../components/ui/Title';
import Home from "./home";

export default function Index() {
  return (
    <div className="">
      <Head>
        <Title>Create Next App</Title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </Head>
      <Header />
      <Home />
      <div className="p-20 container mx-auto">
      </div>
    </div>
  )
}
