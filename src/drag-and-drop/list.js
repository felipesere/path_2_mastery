import React from 'react'

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
      <React.Fragment>
        {this.state.elements.map((element, index) => {
          return (
            <Droppable
              key={element.id}
              index={index}
              drop={(x, y) => swap(x, y)}
            >
              <Draggable index={index}>{displayFn(element)}</Draggable>
            </Droppable>
          )
        })}
      </React.Fragment>
    )
  }

  swap(index, newLocation) {
    const elements = this.state.elements
    this.setState({
      elements: transform(elements).move(index, { to: newLocation })
    })
  }
}

class Draggable extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()

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
    const names = this.state.classNames

    switch (roughMouseLocation(this.ref.current, e)) {
      case 'top-half':
        {
          console.log('top-half')
          names.add('move-up')
          names.delete('move-down')
        }
        break
      case 'bottom-half':
        {
          console.log('bottom-half')
          names.add('move-down')
          names.delete('move-up')
        }
        break
    }
  }

  leave() {
    const names = this.state.classNames
    names.delete('move-up')
    names.delete('move-down')
  }

  render() {
    return (
      <div
        ref={this.ref}
        className={Array.from(this.state.classNames).join(' ')}
        draggable={true}
        onDragStart={this.start}
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
    this.setState({ className: '' })
  }

  onDragOver(e) {
    e.preventDefault()
    this.setState({ className: 'over' })
  }

  onDragLeave() {
    this.setState({ className: '' })
  }

  render() {
    return (
      <div
        className={`dropzone ${this.state.className}`}
        onDrop={this.onDrop}
        onDragOver={this.onDragOver}
        onDragLeave={this.onDragLeave}
      >
        {this.props.children}
      </div>
    )
  }
}

function roughMouseLocation(element, event) {
  var rect = element.getBoundingClientRect()
  const height = rect.height
  const top = rect.top
  const mouseY = event.clientY

  if (top + height / 2 > mouseY) {
    return 'top-half'
  } else {
    return 'bottom-half'
  }
}

export function transform(collection) {
  return {
    move: (idx, { to: location }) => {
      const elements = [...collection]
      const toBeMoved = elements[idx]

      elements.splice(idx, 1)
      elements.splice(location, 0, toBeMoved)

      return elements
    }
  }
}
