import React from 'react'
import { Icon } from 'semantic-ui-react'

const Done = () => (
  <Icon className="lesson-icon" name="check circle outline" color="green" />
)

const Current = () => (
  <Icon className="lesson-icon" name="star" color="yellow" />
)

const Todo = () => (
  <Icon className="lesson-icon" name="circle outline" color="blue" />
)

export function LessonIcon({ status }) {
  switch (status) {
    case 'done':
      return <Done />
    case 'current':
      return <Current />
    case 'todo':
      return <Todo />
    default:
      return null
  }
}
