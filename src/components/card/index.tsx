import React from 'react'
import './index.scss'

interface CardProps {
  title?: React.ReactNode
  children?: React.ReactNode
}

export const Card: React.FC<CardProps> = (props) => {
  const { title, children } = props

  return (
    <div className='wk-card'>
      {
        title && <div className='wk-card-title'>
          {title}
        </div>
      }
      <div className='wk-card-content'>{children}</div>
    </div>
  )
}