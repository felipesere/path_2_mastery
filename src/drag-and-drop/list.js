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

function Draggable({ index, children }) {
  return (
    <div
      draggable={true}
      onDragStart={ev => {
        ev.dataTransfer.setData('from-index', index)
      }}
    >
      {children}
    </div>
  )
}

function Droppable({ index, drop }) {
  const f = e => {
    e.preventDefault()
    const from = e.dataTransfer.getData('from-index')
    drop(from, index)
  }
  return (
    <div onDrop={f} onDragOver={e => e.preventDefault()}>
      SPACE
    </div>
  )
}
