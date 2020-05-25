import React from 'react'
import './Sidebar.scss'
import { MenuOutlined } from '@ant-design/icons'
import KButton from '../utils/KButton'
import SidebarItem from './SidebarItem'

const Sidebar = props => {

  function genStaticMenu (currentTaskType, menuList) {
    return menuList.map(item => {
      return (
        <SidebarItem
          isActive={currentTaskType === item.taskType}
          switch={(type) => props.setCurrentTaskType(type)}
          key={item.taskType}
          title={item.title}
          taskType={item.taskType}
          textColor={item.textColor}
          hoverClass={item.hoverClass}>
          {item.icon}
        </SidebarItem>
      )
    })
  }

  return (
    <div className={`Sidebar ${props.isShrink ? 'shrink' : ''} bg-gray-200 py-5`}>
      <div style={{ paddingLeft: '8px' }}>
        <KButton
          hoverClass='hover:shadow-sm hover:bg-gray-100'
          customClass='text-blue-300'
          onClick={() => props.setShrink(!props.isShrink)}
        >
          <MenuOutlined style={{ fontSize: '20px' }}/>
        </KButton>
      </div>
      <div className='py-2'>
        {genStaticMenu(props.currentTaskType, props.staticMenuList)}
      </div>
    </div>
  )
}

export default Sidebar
