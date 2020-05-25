import { BellOutlined, CoffeeOutlined, InboxOutlined } from '@ant-design/icons'
import React from 'react'

const config = {
  isShrink: false,
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

export default config
