import React, { useState, useEffect } from 'react'
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
  const [themeColor, setThemeColor] = useState(config.staticMenuList[0].color)

  return (
    <div className='App bg-gray-100 flex flex-col'>
      <Header/>
      <div className='flex-1 flex'>
        <Sidebar
          isShrink={isShrink}
          setShrink={setShrink}
          currentTaskType={currentTaskType}
          setCurrentTaskType={setCurrentTaskType}
          setThemeColor={setThemeColor}
          staticMenuList={config.staticMenuList}
        />
        <Content themeColor={themeColor}/>
      </div>
    </div>
  )
}

export default App
