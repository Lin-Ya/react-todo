import { BellOutlined, CoffeeOutlined, InboxOutlined } from '@ant-design/icons'
import React from 'react'

const config = {
  isShrink: false,
  staticMenuList: [
    {
      title: '我的一天',
      icon: <CoffeeOutlined style={{ fontSize: '20px' }}/>,
      taskType: 'myDay',
      color: 'red'
    },
    {
      title: '重要',
      icon: <BellOutlined style={{ fontSize: '20px' }}/>,
      taskType: 'important',
      color: 'blue'
      // textColor: 'text-blue-500',
      // hoverClass: 'hover:bg-blue-200',
    },
    {
      title: '任务',
      icon: <InboxOutlined style={{ fontSize: '20px' }}/>,
      taskType: 'inbox',
      color: 'green'
      // textColor: 'text-green-500',
      // hoverClass: 'hover:bg-green-200',
    }
  ]
}

export default config
