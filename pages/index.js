import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

export default function Home() {

  const router = useRouter();
  const [goToLocalization, setGoToLocalization] = useState(false);

  useEffect(()=>{
    if(goToLocalization){
      // Loading local resources
      router.push('/localization/');
    }
  },[goToLocalization])


  const renderThis = () => {
    if(!goToLocalization)setGoToLocalization(true)
    return null;

  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {renderThis() ?? 
        <main className={styles.main}>
          <div
            className="grid grid-cols-7 
          qs:bg-pink-400 qs:grid-cols-3
          sm:bg-blue-400 sm:grid-cols-4
          md:bg-violet-600 md:grid-cols-5   
          lg:bg-lime-400 lg:grid-cols-6  
          xl:bg-red-400"
          >
            BYE
          </div>
      </main>
    }
    </>
  );
}