import React from 'react'
import PropTypes from 'prop-types'
import { Card, Icon, Button } from 'semantic-ui-react'

const Done = () => (
  <Icon className="lesson-icon" name="check circle outline" color="green" />
)

const Current = () => (
  <Icon className="lesson-icon" name="star" color="yellow" />
)

let LessonIcon = ({ done, current }) => {
  if (done) {
    return <Done />
  }
  if (current) {
    return <Current />
  }

  return null
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
        <Button basic color="blue">
          Add
        </Button>
      </Card.Content>
    </Card>
  )
}
