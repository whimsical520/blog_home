import React from 'react'
import { Card } from '~/components/card'
import { CaseCard } from '~/components/caseCard'
import { IntroCard } from '~/components/introCard'
import case01Thumb from '~/images/thumbs/case01-thumb.jpg'
import case02Thumb from '~/images/thumbs/case02-thumb.jpg'
import miniprogrameThumb from '~/images/thumbs/miniprogram-thumb.jpeg'
import pcThumb from '~/images/thumbs/pc-thumb.jpeg'
import webThumb from '~/images/thumbs/web-thumb.jpeg'

export const Content: React.FC = () => {
  return (
    <div className='site-content'>
      <Card
        title={
          <p>
            <i className='iconfont icon-anchorPoint' /> 主题
          </p>
        }
      >
        <div className='theme-lists'>
          <IntroCard thumb={webThumb.src} title='网站开发' subTitle='官网、H5、ERP、后台' />
          <IntroCard thumb={pcThumb.src} title='PC应用开发' subTitle='工具小能手' />
          <IntroCard
            thumb={miniprogrameThumb.src}
            title='小程序开发'
            subTitle='微信、抖音、百度等'
          />
        </div>
      </Card>

      <Card
        title={
          <p>
            <i className='iconfont icon-introduce' /> 案例
          </p>
        }
      >
        <div className='case-lists'>
          <CaseCard
            thumb={case01Thumb.src}
            date='2024-09-05 16:54'
            title='测试'
            tags={[
              {
                icon: 'tag',
                label: 'web'
              }
            ]}
            desc='这个一个web应用'
          />
          <CaseCard
            thumb={case02Thumb.src}
            date='2024-09-05 16:54'
            title='这是一个非常非常非常非常非常非常长的名字'
            tags={[
              {
                icon: 'tag',
                label: 'PC'
              }
            ]}
            desc='这个一个PC应用'
            right
          />
        </div>
      </Card>
    </div>
  )
}
