import React from 'react'
import './Sidebar.scss'
import { MenuOutlined, CoffeeOutlined, BellOutlined, InboxOutlined } from '@ant-design/icons'
import KButton from '../utils/KButton'
import SidebarItem from './SidebarItem'

class Sidebar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isShrink: false,
      currentTaskType: 'myDay'
    }
  }

  /**
   * 控制收缩
   */
  toggleShrink () {
    this.setState({
      isShrink: !this.state.isShrink
    })
  }

  /**
   * 切换菜单
   * @param type
   */
  switchTaskList (type) {
    this.setState({
      currentTaskType: type
    })
  }

  /**
   * 创建静态菜单
   * @returns {*[]}
   */
  genStaticMenu () {
    const { currentTaskType } = this.state
    const list = [
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
    return list.map(item => {
      return (
        <SidebarItem
          isActive={currentTaskType === item.taskType}
          switch={(e) => this.switchTaskList(e)}
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

  render () {
    const { isShrink } = this.state
    return (
      <div className={`Sidebar ${isShrink ? 'shrink' : ''} bg-gray-200 py-5`}>
        <div style={{ paddingLeft: '8px' }}>
          <KButton
            hoverClass='hover:shadow-sm hover:bg-gray-100'
            customClass='text-blue-300'
            onClick={() => this.toggleShrink()}
          >
            <MenuOutlined style={{ fontSize: '20px' }}/>
          </KButton>
        </div>
        <div className='py-2'>
          {this.genStaticMenu()}
        </div>
      </div>
    )
  }
}

export default Sidebar
