import React from 'react'
import { Lesson } from './lesson/lesson'
import hash from 'string-hash'

export class MyPathContainer extends React.Component {
  constructor(props) {
    super(props)
    const bordingLessons = [
      {
        id: 1,
        title: 'Java 3x3 TTT',
        subtitle: 'Something fancy and flavourful'
      },
      {
        id: 2,
        title: 'Java 4x4 TTT',
        subtitle: 'Something fancy and flavourful'
      },
      {
        id: 3,
        title: 'Java 6x5 TTT',
        subtitle: 'Something fancy and flavourful'
      },
      {
        id: 4,
        title: 'Java 6x6 TTT',
        subtitle: 'Something fancy and flavourful'
      },
      {
        id: 6,
        title: 'Java 7x7 TTT',
        subtitle: 'Something fancy and flavourful'
      },
      {
        id: 7,
        title: 'Java 8x8 TTT',
        subtitle: 'Something fancy and flavourful'
      },
      {
        id: 8,
        title: 'Java 9x9 TTT',
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
      {done.map(l => <Lesson.Tiny key={hash(l.title)} lesson={l} />)}
      <Lesson.Detailed />
      {todo.map(l => <Lesson.Tiny key={hash(l.title)} lesson={l} />)}
    </div>
  )
}
