import React, { useState } from 'react'

const TaskItem = (props) => {
  const { task, color } = props
  const [isEditing, setEditing] = useState(false)
  const [title, setTitle] = useState(task.title)
  const [checked, setChecked] = useState(task.checked)

  const contentEle = <div className={`py-1 px-3 ${checked ? `text-${color}-500 line-through` : ''}`}
                          onClick={() => !checked && setEditing(true)}>{title}</div>

  const inputEle = <input className='py-1 px-3 bg-transparent'
                          autoFocus={true}
                          style={{ width: '100%' }}
                          type="text"
                          value={title}
                          onBlur={() => setEditing(false)}
                          onChange={e => setTitle(e.target.value)}/>

  return (
    <div className={`TaskItem flex items-center p-2 border-solid border-b border-${color}-500`}>
      <div className="Taskitem-checkbox p-2">
        <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)}/>
      </div>
      <div className='Taskitem-content flex-1 flex-shrink-0'>
        {isEditing ? inputEle : contentEle}
      </div>
    </div>
  )
}

// class TaskItem extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = Object.assign({}, props.task, { isEditing: false })
//   }
//
//   changeChecked () {
//     this.setState({
//       checked: !this.state.checked
//     })
//   }
//
//   render () {
//     const { isEditing, title, checked } = this.state
//
//     const contentEle = <div>{title}</div>
//     const inputEle = <input type="text" value={title}/>
//
//     return (
//       <div className='TaskItem flex items-center p-2 border-solid border-b border-black'>
//         <div className="Taskitem-checkbox p-2">
//           <input
//             type="checkbox"
//             checked={checked}
//             onChange={() => this.changeChecked()}
//           />
//         </div>
//         <div className='Taskitem-content flex-1 flex-shrink-0'>
//           {isEditing ? inputEle : contentEle}
//         </div>
//       </div>
//     )
//   }
// }

export default TaskItem
