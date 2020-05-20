import React from 'react'
import './Header.scss'
import { AppstoreTwoTone, SettingTwoTone, BulbTwoTone } from '@ant-design/icons'
import Search from './Search'
import KButton from '../utils/KButton'

class Header extends React.Component {
  constructor (props) {
    super()
  }

  btnDfClass () {
    return 'focus:outline-none hover:bg-blue-700 flex-shrink-0 flex justify-center items-center'
  }

  render () {
    return (
      <div className='Header flex flex-no-wrap bg-blue-600'>
        <KButton>
          <AppstoreTwoTone style={{ fontSize: '20px' }} />
        </KButton>
        <div className='flex-1'>
          <Search />
        </div>
        <KButton>
          <BulbTwoTone style={{ fontSize: '20px' }} />
        </KButton>
        <KButton>
          <SettingTwoTone style={{ fontSize: '20px' }} />
        </KButton>
      </div>
    )
  }
}

export default Header
