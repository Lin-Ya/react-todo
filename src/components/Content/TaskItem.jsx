import React from 'react'

const TaskItem = (props) => {
  return (
    <div key={props.task.id} className='TaskItem'>{props.task.title}</div>
  )
}

export default TaskItem
