import React from 'react'
import { Header } from 'semantic-ui-react'
import { Parts } from './parts'
import {LessonType} from "../types";

type DetailedLessonProps = {
    lesson: LessonType
}
export const DetailedLesson = ({ lesson }: DetailedLessonProps) => {
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
