import React, { useMemo } from 'react'
import './index.scss'

interface CaseCardProps {
  thumb: string
  date: string
  title: string
  tags?: {
    icon: string
    label: string
  }[]
  desc?: string
  right?: boolean
}

export const CaseCard: React.FC<CaseCardProps> = (props) => {
  const { thumb, date, title, tags, desc, right } = props

  const thumbBox = useMemo(() => {
    return (
      <div className='caseCard-thumb'>
        <img className='thumb' src={thumb} />
      </div>
    )
  }, [])

  const introBox = useMemo(() => {
    return (
      <div className={`caseCard-intro ${right ? 'right' : ''}`}>
        <p className='date'>
          <i className='iconfont icon-time' />
          {date}
        </p>
        <h3 className='title textOverflow'>{title}</h3>
        {tags?.length && (
          <div className='tags'>
            {tags.map((i, n) => {
              return (
                <span className='tag-item' key={`tag-${n}`}>
                  <i className='iconfont icon-tag' />
                  {i.label}
                </span>
              )
            })}
          </div>
        )}
        <p className='desc'>{desc}</p>
        <i className='iconfont icon-ellipsis ellipsis' />
      </div>
    )
  }, [])

  return (
    <div className='caseCard-box'>
      <div>
        {right ? thumbBox : introBox}
        {right ? introBox : thumbBox}
      </div>
    </div>
  )
}
