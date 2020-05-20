import React from 'react'
import 'reset-css'
import 'normalize.css/normalize.css'
import './App.css'

import 'tailwindcss/dist/base.css'
import 'tailwindcss/dist/components.css'
import 'tailwindcss/dist/utilities.css'

import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Content from './components/Content/Content'

function App () {
  return (
    <div className='App bg-teal-600 flex flex-col'>
      <Header />
      <div className='flex-1 flex'>
        <Sidebar />
        <Content />
      </div>
    </div>
  )
}

export default App
