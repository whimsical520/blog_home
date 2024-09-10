import React, { useCallback, useEffect, useMemo, useState } from 'react'
import './index.scss'

type MenuItem = {
  icon: string
  title: string
}

export const Header: React.FC = () => {
  const [hasScroll, setHasScroll] = useState<boolean>(false)
  const [mouseEntry, setMouseEntry] = useState<boolean>(false)
  const [scrollProgress, setScrollProgress] = useState<number>(0)
  const [menus] = useState<MenuItem[]>([
    {
      icon: 'icon-home_page',
      title: '首页'
    },
    {
      icon: 'icon-archive',
      title: '归档'
    },
    {
      icon: 'icon-checklist',
      title: '清单'
    },
    {
      icon: 'icon-message_board',
      title: '留言板'
    }
  ])

  const listenToScroll = useCallback(() => {
    const scrollTop = document.documentElement.scrollTop

    setScrollProgress(Math.ceil((scrollTop * document.body.clientWidth) / window.screen.height))
    setHasScroll(scrollTop > 0)
  }, [])

  const showMenu = useMemo(() => {
    return hasScroll || mouseEntry
  }, [hasScroll, mouseEntry])

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll, false)

    return () => {
      window.removeEventListener('scroll', listenToScroll)
    }
  }, [])
  console.log('scrollProgress:', scrollProgress)
  return (
    <div
      className={`wk-header--container ${hasScroll ? 'show-bg' : ''}`}
      onMouseEnter={() => setMouseEntry(true)}
      onMouseLeave={() => setMouseEntry(false)}
    >
      <div className='scroll-progress' style={{ width: scrollProgress }} />
      <div className='logo' />
      {showMenu && (
        <ul className='wk-header-menus'>
          {menus.map((i, n) => {
            return (
              <li className='wk-header-menus--item' key={`menu-${n}`}>
                <i className={`iconfont ${i.icon}`} />
                <span className='title'>{i.title}</span>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
