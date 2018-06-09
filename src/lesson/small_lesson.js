import React from 'react'
import { Card, Button } from 'semantic-ui-react'
import { LessonIcon } from './icons'

const Interactions = ({ moreDetails }) => {
  return (
    <Button.Group widths={2}>
      <Button basic color="blue">
        Add
      </Button>
      <Button basic color="grey" onClick={moreDetails}>
        More
      </Button>
    </Button.Group>
  )
}

export function SmallLesson({ lesson, state, moreDetails }) {
  return (
    <Card raised>
      <Card.Content>
        <Card.Header>
          {lesson.title}
          <LessonIcon state={state} />
        </Card.Header>
        <Card.Description>{lesson.subtitle}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Interactions moreDetails={moreDetails} />
      </Card.Content>
    </Card>
  )
}
