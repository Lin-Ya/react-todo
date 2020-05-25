import React from 'react'
import './SidebarItem.scss'
import KButton from '../utils/KButton'

class SidebarItem extends React.Component {
  static defaultProps = {
    title: '默认标题',
    btnIcon: null,
    taskType: '',
    color: 'gray',
    isActive: false
  }

  render () {
    const { props } = this
    const { color, isActive } = props
    const textStyle = `text-${color}-500`
    const bgStyle = isActive ? `bg-${color}-200` : 'bg-transparent'
    const hoverStyle = `hover:bg-${color}-200`
    return (
      <div onClick={() => props.switch(props)}
           className={`Sidebar-Item flex items-center ${textStyle} ${bgStyle} ${hoverStyle}`}>
        <KButton hoverClass='hover:bg-transparent'>
          {props.children}
        </KButton>
        <p className='flex-shrink-0'>{props.title}</p>
      </div>
    )
  }
}

export default SidebarItem
