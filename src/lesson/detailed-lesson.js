import React from 'react'
import { Card } from 'semantic-ui-react'

export function DetailedLesson({ lesson }) {
  return (
    <Card raised>
      <Card.Content>
        <Card.Header>{lesson.title}</Card.Header>
        <Card.Meta>{lesson.subtitle}</Card.Meta>
        <p>{lesson.description}</p>
        <Outputs outputs={lesson.outputs} />
        <Outcomes outcomes={lesson.outcomes} />
      </Card.Content>
    </Card>
  )
}

function Outputs({ outputs }) {
  return (
    <React.Fragment>
      <p>Outputs</p>
      <ul>{outputs.map((output, i) => <li key={i}>{output}</li>)}</ul>
    </React.Fragment>
  )
}

function Outcomes({ outcomes }) {
  return (
    <React.Fragment>
      <p>Outcomes</p>
      <ul>{outcomes.map((outcome, i) => <li key={i}>{outcome}</li>)}</ul>
    </React.Fragment>
  )
}
