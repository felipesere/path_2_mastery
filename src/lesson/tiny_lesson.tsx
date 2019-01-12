import React from 'react'
import { Card } from 'semantic-ui-react'
import {LessonType} from "../types";

export type TinyLessonProps = {
    lesson: LessonType
}

export const TinyLesson = ({ lesson }: TinyLessonProps) => {
    return <Card raised>
      <Card.Content>
        <Card.Header>{lesson.title}</Card.Header>
        <Card.Meta>{lesson.subtitle}</Card.Meta>
      </Card.Content>
    </Card>
};
