import React from 'react'
import { Lesson } from './lesson/lesson'
import hash from 'string-hash'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'

export class MyPathContainer extends React.Component {
  constructor(props) {
    super(props)
    const bordingLessons = [
      {
        id: 1,
        title: '1',
        subtitle: 'Something fancy and flavourful'
      },
      {
        id: 2,
        title: '2',
        subtitle: 'Something fancy and flavourful'
      },
      {
        id: 3,
        title: '3',
        subtitle: 'Something fancy and flavourful'
      },
      {
        id: 4,
        title: '4',
        subtitle: 'Something fancy and flavourful'
      },
      {
        id: 5,
        title: '5',
        subtitle: 'Something fancy and flavourful'
      },
      {
        id: 6,
        title: '6',
        subtitle: 'Something fancy and flavourful'
      },
      {
        id: 7,
        title: '7',
        subtitle: 'Something fancy and flavourful'
      }
    ]

    this.state = {
      done: bordingLessons.slice(0, 2),
      todo: bordingLessons.slice(2)
    }
  }
  render() {
    return <MyPath done={this.state.done} todo={this.state.todo} />
  }
}

function MyPath({ done, todo }) {
  return (
    <div className="path">
      {done.map(l => (
        <div key={hash(l.title)}>
          <Lesson.Tiny lesson={l} />
        </div>
      ))}
      <div>
        <Lesson.Detailed />
      </div>
      <Todo lessons={todo} />
    </div>
  )
}

class Todo extends React.Component {
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
