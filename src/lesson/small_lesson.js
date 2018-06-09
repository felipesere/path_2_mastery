import React from 'react'
import { Card, Button } from 'semantic-ui-react'

export function SmallLesson() {
  return (
    <Card raised>
      <Card.Content>
        <Card.Header>Java TTT 3x3</Card.Header>
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
