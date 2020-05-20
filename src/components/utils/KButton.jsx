import React from 'react'

class KButton extends React.Component {
  static defaultProps = {
    customClass: '',
    hoverClass: 'hover:bg-blue-700'
  }
  constructor (props) {
    super(props)
    this.state = {
      btnDfClass:
        'focus:outline-none flex-shrink-0 flex justify-center items-center'
    }
  }
  render () {
    const { btnDfClass } = this.state
    const { customClass, hoverClass } = this.props
    return (
      <button
        {...this.props}
        className={`KButton ${btnDfClass} ${customClass} ${hoverClass}`}
      >
        {this.props.children}
      </button>
    )
  }
}

export default KButton
