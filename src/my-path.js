import React from 'react'
import { Lesson } from './lesson/lesson'

export class MyPathContainer extends React.Component {
  render() {
    return <MyPath />
  }
}

function MyPath() {
  return (
    <div className="path">
      <Lesson.Tiny />
      <Lesson.Tiny />
      <Lesson.Tiny />
      <Lesson.Tiny />
      <Lesson.Detailed />
      <Lesson.Tiny />
      <Lesson.Tiny />
      <Lesson.Tiny />
      <Lesson.Tiny />
    </div>
  )
}
