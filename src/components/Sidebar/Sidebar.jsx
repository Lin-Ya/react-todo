import React from 'react'
import './Sidebar.scss'
import { MenuOutlined } from '@ant-design/icons'
import KButton from '../utils/KButton'

class Sidebar extends React.Component {
  constructor (props) {
    super()
    this.state = {
      isShrink: false
    }
  }

  toggleShrink () {
    this.setState({
      isShrink: !this.state.isShrink
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
            <MenuOutlined style={{ fontSize: '20px' }} />
          </KButton>
        </div>
      </div>
    )
  }
}

export default Sidebar
