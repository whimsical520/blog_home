import React from 'react'
import avatarIcon from '../../images/avatar.jpg'

const FigureBox: React.FC = () => {
  return (
    <figure id='centerbg'>
      <div className='focusinfo'>
        <div className='header-box'>
          <img src={avatarIcon.src} />
        </div>
        <div className='header-info'>
          <p>愿我们能够与最好的我们相遇</p>
        </div>
      </div>
    </figure>
  )
}

export default FigureBox