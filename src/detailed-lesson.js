import React from 'react'
import { Card } from 'semantic-ui-react'

export function DetailedLesson() {
  return (
    <Card raised>
      <Card.Content>
        <Card.Header>Java TTT 3x3</Card.Header>
        <p>
          Write a basic 3x3 Tic-Tac-Toe in Java. It is enough to support a human
          and a computer player. Make sure that the computer can not be beaten.
        </p>
        <p>Outputs</p>
        <ol>
          <li>Command line user interface</li>
          <li>Unbeatable AI</li>
          <li>100% code coverage</li>
        </ol>
        <p>Outcomes</p>
        <ol>
          <li>Basic understanding of static typing</li>
          <li>Understand how a Java project is structured</li>
        </ol>
      </Card.Content>
    </Card>
  )
}
