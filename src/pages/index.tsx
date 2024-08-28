// import Home, { getServerSideProps as homeSSR } from './home/index'
import Home, { getStaticProps as homeSSR } from './home/index'

// export const getServerSideProps = homeSSR
export const getStaticProps = homeSSR

export default Home
