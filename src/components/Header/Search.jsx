import React from 'react'
import { SearchOutlined } from '@ant-design/icons'
import './Search.scss'

class Search extends React.Component {
  constructor (props) {
    super()
  }

  render () {
    return (
      <div className='Search-wrapper'>
        <div className='Search flex group hover:bg-white bg-blue-400 rounded'>
          <SearchOutlined className='text-blue-200' role='button' />
          <input
            type='text'
            className='text-blue-700 flex-1 bg-blue-400 focus:outline-none'
          />
        </div>
      </div>
    )
  }
}

export default Search
