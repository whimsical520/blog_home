import React from 'react'
import fetchTdkMsg from '~/js/handlers/TdkMsg'


const GetStaticProps: React.FC<any> = (props) => {
  console.log('props:', props)
  return (
    <div>this is getStaticProps</div>
  )
}

export const getStaticProps = async () => {
  const now = Date.now()
  try {
    const [
      tdkMsg,
    ] = await Promise.all([
      fetchTdkMsg('index', 0)
    ])
    return {
      props: {
        tdkMsg,
      }
    }
  } catch (error) {
    // TODO:
    console.debug('Home page - getStaticProps: error')
    console.debug(error)
    return {
      props: {
        tdkMsg: null,
      },
    }
  }
}

export default GetStaticProps