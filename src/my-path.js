import React from 'react'
import { Lesson } from './lesson/lesson'
import hash from 'string-hash'
import { List } from './drag-and-drop/list'

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
      {done.map(l => <Lesson.Tiny key={hash(l.title)} lesson={l} />)}
      <Lesson.Detailed />
      <List elements={todo} displayFn={l => <Lesson.Tiny lesson={l} />} />
    </div>
  )
}
