import React from 'react'
import { Card, Button } from 'semantic-ui-react'
import { LessonIcon } from './icons'
import ReactPlaceholder from 'react-placeholder'
import 'react-placeholder/lib/reactPlaceholder.css'

const Interactions = ({ moreDetails, status }) => {
  let button
  if (status === 'todo' || status === 'current') {
    button = (
      <Button basic color="red">
        Remove
      </Button>
    )
  }
  if (status === 'none') {
    button = (
      <Button basic color="blue">
        Add
      </Button>
    )
  }

  return (
    <Button.Group widths={2}>
      {button}
      <Button basic color="grey" onClick={moreDetails}>
        More
      </Button>
    </Button.Group>
  )
}

export function SmallLesson({ lesson, moreDetails }) {
  const titleStyle = {
    float: 'left',
    width: '80%'
  }

  return (
    <Card raised className={'small-lesson'}>
      <Card.Content>
        <Card.Header>
          <p style={titleStyle}>{lesson.title}</p>
          <LessonIcon status={lesson.status} />
        </Card.Header>
        <Card.Description>{lesson.subtitle}</Card.Description>
      </Card.Content>
      <Card.Content>
        <PlaceholderText />
      </Card.Content>
      <Card.Content extra className={'interaction-button-group'}>
        <Interactions moreDetails={moreDetails} status={lesson.status} />
      </Card.Content>
    </Card>
  )
}

const PlaceholderText = () => (
  <ReactPlaceholder ready={false} type="text" rows={3} color={'#e8e8e8'}>
    Will never be displayed
  </ReactPlaceholder>
)
