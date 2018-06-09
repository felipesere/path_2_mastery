import React from 'react'
import { SmallLesson } from './small_lesson'
import { Card } from 'semantic-ui-react'

export function AvailableLessons() {
  return (
    <Card.Group className="available-lessons">
      <SmallLesson />
      <SmallLesson />
      <SmallLesson />
      <SmallLesson />
      <SmallLesson />
      <SmallLesson />
      <SmallLesson />
      <SmallLesson />
      <SmallLesson />
    </Card.Group>
  )
}
