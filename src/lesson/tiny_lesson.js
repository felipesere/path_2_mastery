import React from 'react'
import { Card } from 'semantic-ui-react'

export function TinyLesson({ lesson }) {
  return (
    <Card raised>
      <Card.Content>
        <Card.Header>{lesson.title}</Card.Header>
        <Card.Meta>{lesson.subtitle}</Card.Meta>
      </Card.Content>
    </Card>
  )
}
