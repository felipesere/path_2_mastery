import React from 'react'
import { Lesson } from './lesson/lesson'
import hash from 'string-hash'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'

export class MyPathContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      done: props.lessons.filter(l => l.status === 'done'),
      current: props.lessons.find(l => l.status === 'current'),
      todo: props.lessons.filter(l => l.status === 'todo')
    }
  }

  render() {
    return (
      <MyPath
        done={this.state.done}
        current={this.state.current}
        todo={this.state.todo}
      />
    )
  }
}

function MyPath({ done, current, todo }) {
  return (
    <div className="path">
      <DoneList done={done} />
      <Lesson.Detailed lesson={current} />
      <TodoList lessons={todo} />
    </div>
  )
}

function DoneList({ done }) {
  return (
    <React.Fragment>
      {done.map(l => (
        <div key={hash(l.title)}>
          <Lesson.Tiny lesson={l} />
        </div>
      ))}
    </React.Fragment>
  )
}

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = props
  }

  onSortEnd({ oldIndex, newIndex }) {
    this.setState({
      lessons: transform(this.state.lessons).move(oldIndex, { to: newIndex })
    })
  }

  render() {
    return (
      <SortableList
        lessons={this.state.lessons}
        onSortEnd={this.onSortEnd.bind(this)}
      />
    )
  }
}

const SortableList = SortableContainer(({ lessons }) => {
  return (
    <ul>
      {lessons.map((l, index) => (
        <SortableLesson key={index} index={index} lesson={l} />
      ))}
    </ul>
  )
})

const SortableLesson = SortableElement(({ lesson }) => {
  return (
    <li>
      <Lesson.Tiny lesson={lesson} />
    </li>
  )
})

function transform(collection) {
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
