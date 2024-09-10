import React from 'react'
import './index.scss'

interface IntroCardProps {
  thumb: string
  title: string
  subTitle?: string
}

export const IntroCard: React.FC<IntroCardProps> = (props) => {
  const { thumb, title, subTitle } = props
  return (
    <div className='introCard-box'>
      <img className='introCard-thumb' src={thumb} />
      <div className='introCard-shadow'>
        <div className='title'>{title}</div>
        {subTitle && <div className='subTitle'>{subTitle}</div>}
      </div>
    </div>
  )
}
