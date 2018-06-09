import React from 'react'
import { Card, Icon, Button } from 'semantic-ui-react'

const Done = () => (
  <Icon className="lesson-icon" name="check circle outline" color="green" />
)

const Current = () => (
  <Icon className="lesson-icon" name="star" color="yellow" />
)

const Todo = () => (
  <Icon className="lesson-icon" name="circle outline" color="blue" />
)

let LessonIcon = ({ done, current, todo }) => {
  if (done) {
    return <Done />
  }
  if (current) {
    return <Current />
  }

  if (todo) {
    return <Todo />
  }

  return null
}

const Interactions = ({ done, current, todo }) => {
  if (done || current || todo) {
    return null
  } else {
    return (
      <Button basic color="blue">
        Add
      </Button>
    )
  }
}

export function SmallLesson(props) {
  return (
    <Card raised>
      <Card.Content>
        <Card.Header>
          Java TTT 3x3
          <LessonIcon {...props} />
        </Card.Header>
        <Card.Description>Some minor detail. Minimal.</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Interactions {...props} />
      </Card.Content>
    </Card>
  )
}
