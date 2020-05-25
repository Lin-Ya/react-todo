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
import { getTasks } from './api/tasks'

function App () {
  const [isShrink, setShrink] = useState(config.isShrink)
  const [currentTaskList, setCurrentTaskList] = useState(config.staticMenuList[0])
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const type = currentTaskList.taskType
    getTasks(type).then(res => {
      setTasks(res.data)
    }).catch(err => {
      console.error('获取任务列表失败: ', err.message)
    })
  }, [currentTaskList.taskType])

  return (
    <div className='App bg-gray-100 flex flex-col'>
      <Header/>
      <div className='flex-1 flex'>
        <Sidebar
          isShrink={isShrink}
          setShrink={setShrink}
          currentTaskList={currentTaskList}
          setCurrentTaskList={setCurrentTaskList}
          staticMenuList={config.staticMenuList}
        />
        <Content currentTaskList={currentTaskList} tasks={tasks}/>
      </div>
    </div>
  )
}

export default App
