import React from 'react'
import './Content.scss'
import TaskItem from './TaskItem'

const Content = props => {
  const { currentTaskList, tasks = [] } = props
  const { color = 'gray', title } = currentTaskList
  const bgStyle = color ? `bg-${color}-200` : 'bg-transparent'
  return (
    <div className={`Content ${bgStyle}`}>
      <h1 className={`font-bold text-2xl text-${color}-600 pb-8`}>{title}</h1>
      <div>
        {tasks.map(task => <TaskItem color={color} task={task} key={task.id}/>)}
      </div>
    </div>
  )
}

export default Content
