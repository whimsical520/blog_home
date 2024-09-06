import React from 'react'
import fetchBannerInfo from 'src/js/handlers/BannerInfo'

const GetServerSideProps: React.FC = (props) => {
  console.log('props:', props)
  return <div>this is getServerSideProps</div>
}

export const getServerSideProps = async () => {
  try {
    const [bannerInfoList] = await Promise.all([fetchBannerInfo()])
    return {
      props: {
        now: Date.now(),
        bannerInfoList
      }
    }
  } catch (error) {
    // TODO:
    console.debug('Home page - getStaticProps: error')
    console.debug(error)
    return {
      props: {
        bannerInfoList: []
      }
    }
  }
}

export default GetServerSideProps
