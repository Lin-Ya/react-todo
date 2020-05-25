import React, { useState } from 'react'
import 'reset-css'
import 'normalize.css/normalize.css'
import './App.css'

import 'tailwindcss/dist/base.css'
import 'tailwindcss/dist/components.css'
import 'tailwindcss/dist/utilities.css'

import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Content from './components/Content/Content'
import config from './config'

function App () {

  const [isShrink, setShrink] = useState(config.isShrink)
  const [currentTaskType, setCurrentTaskType] = useState(config.staticMenuList[0].taskType)

  return (
    <div className='App bg-teal-600 flex flex-col'>
      <Header/>
      <div className='flex-1 flex'>
        <Sidebar
          isShrink={isShrink}
          setShrink={setShrink}
          currentTaskType={currentTaskType}
          setCurrentTaskType={setCurrentTaskType}
          staticMenuList={config.staticMenuList}
        />
        <Content/>
      </div>
    </div>
  )
}

export default App
