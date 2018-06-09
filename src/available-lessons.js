import React from 'react'
import { Lesson } from './lesson/lesson'

export function AvailableLessons() {
  return (
    <div className="available-lessons">
      <Lesson.Small done />
      <Lesson.Small done />
      <Lesson.Small done />
      <Lesson.Small current />
      <Lesson.Small />
      <Lesson.Small done />
      <Lesson.Small done />
      <Lesson.Small />
      <Lesson.Small />
    </div>
  )
}
