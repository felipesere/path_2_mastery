import React from 'react'
import { Header } from 'semantic-ui-react'
import { Parts } from './parts'

export function DetailedLesson({ lesson }) {
  return (
    <div className="detailed-lesson">
      <Header>
        {lesson.title}
        <Header.Subheader>{lesson.subtitle}</Header.Subheader>
      </Header>
      <p>{lesson.description}</p>
      <Parts.Outputs outputs={lesson.outputs} />
      <Parts.Outcomes outcomes={lesson.outcomes} />
      <Parts.Reading reading={lesson.reading} />
    </div>
  )
}
