import React from 'react'
import { Lesson } from './lesson/lesson'
import { Card } from 'semantic-ui-react'

export function AvailableLessons() {
  return (
    <Card.Group className="available-lessons">
      <Lesson.Small />
      <Lesson.Small />
      <Lesson.Small />
      <Lesson.Small />
      <Lesson.Small />
      <Lesson.Small />
      <Lesson.Small />
      <Lesson.Small />
      <Lesson.Small />
    </Card.Group>
  )
}
