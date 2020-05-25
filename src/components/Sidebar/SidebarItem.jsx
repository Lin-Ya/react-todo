import React from 'react'
import './SidebarItem.scss'
import KButton from '../utils/KButton'

class SidebarItem extends React.Component {
  static defaultProps = {
    title: '默认标题',
    btnIcon: null,
    textColor: '',
    hoverClass: 'hover:bg-gray-300',
    bgClass: 'bg-transparent',
    currentTaskType: '',
    taskType: ''
  }

  render () {
    const { props } = this
    const bgClass = props.isActive ? props.hoverClass.replace('hover:', '') : props.bgClass
    return (
      <div onClick={() => props.switch(props.taskType)}
           className={`Sidebar-Item flex items-center ${props.textColor} ${bgClass} ${props.hoverClass}`}>
        <KButton hoverClass='hover:bg-transparent'>
          {props.children}
        </KButton>
        <p className='flex-shrink-0'>{props.title}</p>
      </div>
    )
  }
}

export default SidebarItem
