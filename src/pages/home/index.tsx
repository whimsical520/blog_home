import React from 'react'
import Head from 'next/head'
import type { GetStaticProps } from 'next'

const Home = () => {
  return (
    <>
      <Head>
       
      </Head>
      <div className='ui-page-main ui-new-layout'>
        <figure>
          
        </figure>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps<any> = async () => {
  return {props: {}}
}

export default Home