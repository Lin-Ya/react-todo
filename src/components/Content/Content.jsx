import React from 'react'
import './Content.scss'

const Content = props => {
  const { themeColor } = props
  const bgStyle = themeColor ? `bg-${themeColor}-200` : 'bg-transparent'
  return (
    <div className={`Content ${bgStyle}`}>Content</div>
  )
}

export default Content
