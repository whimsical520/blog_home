import '@/scss/global.scss'
import '@/scss/iconfont/iconfont.css'
import '@/scss/common.scss'
import { AppProps } from 'next/app'
import Head from 'next/head'
import {Header} from '~/components/header'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>YY-YY官方主播资讯平台</title>
        <meta content='歪阅，YY美女，YY主播，YY游戏，YY活动，YY新闻，YY八卦' name='keywords'></meta>
        <meta
          content='新主播动态资讯，真实主播生活八卦分享，主播全劲爆的头条新闻！'
          name='description'
        ></meta>
      </Head>
      <Header/>
      <Component {...pageProps} />
    </>
  )
}
