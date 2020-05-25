import React, { useState } from 'react'
import './Sidebar.scss'
import { MenuOutlined, CoffeeOutlined, BellOutlined, InboxOutlined } from '@ant-design/icons'
import KButton from '../utils/KButton'
import SidebarItem from './SidebarItem'

const Sidebar = props => {
  const config = {
    staticMenuList: [
      {
        title: '我的一天',
        icon: <CoffeeOutlined style={{ fontSize: '20px' }}/>,
        taskType: 'myDay',
        textColor: 'text-red-500',
        hoverClass: 'hover:bg-red-200',
      },
      {
        title: '重要',
        icon: <BellOutlined style={{ fontSize: '20px' }}/>,
        taskType: 'important',
        textColor: 'text-blue-500',
        hoverClass: 'hover:bg-blue-200',
      },
      {
        title: '任务',
        icon: <InboxOutlined style={{ fontSize: '20px' }}/>,
        taskType: 'inbox',
        textColor: 'text-green-500',
        hoverClass: 'hover:bg-green-200',
      }
    ]
  }

  const [isShrink, setShrink] = useState(false)
  const [currentTaskType, setCurrentTaskType] = useState(config.staticMenuList[0].taskType)

  function genStaticMenu (currentTaskType, menuList) {
    return menuList.map(item => {
      return (
        <SidebarItem
          isActive={currentTaskType === item.taskType}
          switch={(type) => setCurrentTaskType(type)}
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
    <div className={`Sidebar ${isShrink ? 'shrink' : ''} bg-gray-200 py-5`}>
      <div style={{ paddingLeft: '8px' }}>
        <KButton
          hoverClass='hover:shadow-sm hover:bg-gray-100'
          customClass='text-blue-300'
          onClick={() => setShrink(!isShrink)}
        >
          <MenuOutlined style={{ fontSize: '20px' }}/>
        </KButton>
      </div>
      <div className='py-2'>
        {genStaticMenu(currentTaskType, config.staticMenuList)}
      </div>
    </div>
  )
}

export default Sidebar
