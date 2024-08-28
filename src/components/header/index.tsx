import React, { useState } from 'react'
import './index.scss'

type MenuItem = {
  icon: string
  title: string
}

export const Header: React.FC = () => {
  const [menus] = useState<MenuItem[]>([{
    icon: 'icon-home_page',
    title: '首页'
  }, {
    icon: 'icon-archive',
    title: '归档'
  }, {
    icon: 'icon-checklist',
    title: '清单'
  }, {
    icon: 'icon-message_board',
    title: '留言板'
  }])

  return (
    <div className='wk-header--container'>
      <div className='logo' />
      <ul className='wk-header-menus'>
        {
          menus.map((i) => {
            return (
              <li className='wk-header-menus--item'>
                <i className={`iconfont ${i.icon}`} />
                <span className='title'>{i.title}</span>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}