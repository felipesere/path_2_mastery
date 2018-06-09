import React from 'react'
import { Lesson } from './lesson/lesson'
import { Modal } from 'semantic-ui-react'

export function AvailableLessons({ lessons }) {
  return (
    <div className="available-lessons">
      {lessons.map(lesson => <ModalOrLesson lesson={lesson} key={lesson.id} />)}
    </div>
  )
}

class ModalOrLesson extends React.Component {
  constructor(props) {
    super(props)
    this.state = { displayDetails: false }
    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal() {
    this.setState({ displayDetails: !this.state.displayDetails })
  }

  render() {
    if (this.state.displayDetails) {
      return (
        <Lesson.Modal
          lesson={this.props.lesson} 
          close={this.toggleModal} />
      )
    } else {
      return (
        <Lesson.Small
          lesson={this.props.lesson}
          state={randomState()}
          moreDetails={this.toggleModal}
        />
      )
    }
  }
}

function randomState() {
  switch (nextInt(4)) {
    case 0:
      return 'done'
    case 1:
      return 'current'
    case 2:
      return 'todo'
    case 3:
      return 'none'
  }
}

function nextInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}
