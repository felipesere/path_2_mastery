import React from 'react'
import ReactDOM from 'react-dom'

export class List extends React.Component {
  constructor({ elements, displayFn }) {
    super()
    this.state = { elements: elements }
    this.displayFn = displayFn
  }

  render() {
    const displayFn = this.displayFn
    const swap = this.swap.bind(this)
    return (
      <div>
        {this.state.elements.map((element, index) => {
          return (
            <div key={element.id}>
              <Draggable index={index}>{displayFn(element)}</Draggable>
              <Droppable index={index} drop={(x, y) => swap(x, y)} />
            </div>
          )
        })}
      </div>
    )
  }

  swap(from, to) {
    const elements = this.state.elements
    const toBeMoved = elements[from]
    if (from > to) {
      to += 1
    }
    elements.splice(from, 1)
    elements.splice(to, 0, toBeMoved)
    this.setState({ elements: elements })
  }
}

class Draggable extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      classNames: new Set()
    }

    this.start = this.start.bind(this)
    this.over = this.over.bind(this)
    this.leave = this.leave.bind(this)
  }

  start(e) {
    e.dataTransfer.setData('from-index', this.props.index)
  }

  over(e) {
    var rect = ReactDOM.findDOMNode(this).getBoundingClientRect()
    const height = rect.height
    const top = rect.top
    const mouseY = e.clientY
    const names = this.state.classNames

    if (top + height / 2 < mouseY) {
      names.add('move-up')
      names.delete('move-down')
    } else {
      names.add('move-down')
      names.delete('move-up')
    }

    this.setState({ classNames: names })
  }

  leave() {
    const names = this.state.classNames
    names.delete('move-up')
    names.delete('move-down')

    this.setState({ className: names })
  }

  render() {
    return (
      <div
        className={Array.from(this.state.classNames).join(' ')}
        draggable={true}
        onDragStart={ev => {}}
        onDragOver={this.over}
        onDragLeave={this.leave}
      >
        {this.props.children}
      </div>
    )
  }
}

class Droppable extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      className: ''
    }

    this.onDrop = this.onDrop.bind(this)
    this.onDragOver = this.onDragOver.bind(this)
    this.onDragLeave = this.onDragLeave.bind(this)
  }

  onDrop(e) {
    e.preventDefault()
    const from = e.dataTransfer.getData('from-index')

    this.props.drop(from, this.props.index)
    //this.setState({ className: '' })
  }

  onDragOver(e) {
    e.preventDefault()
    //this.setState({ className: 'over' })
  }

  onDragLeave(e) {
    //this.setState({ className: '' })
  }

  render() {
    return (
      <div
        className={this.state.className}
        onDrop={this.onDrop}
        onDragOver={this.onDragOver}
        onDragLeave={this.onDragLeave}
      >
        SPACE
      </div>
    )
  }
}
