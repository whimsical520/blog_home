import type { GetStaticProps } from 'next'
import Content from './content'
import FigureBox from './figureBox'
import './index.scss'
import TopDown from './topDown'
import Wave from './wave'

const Home = () => {
  return (
    <>
      <div className='home-page-main'>
        <div className='home-page-top'>
          <FigureBox />
          <TopDown />
          <Wave />
        </div>
        <Content />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} }
}

export default Home
