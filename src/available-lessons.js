import React from 'react'
import { Lesson } from './lesson/lesson'
import { Container } from 'semantic-ui-react'

export function AvailableLessons({ lessons }) {
  return (
    <Container>
      <div className="available-lessons">
        {lessons.map(lesson => (
          <ModalOrLesson lesson={lesson} key={lesson.id} />
        ))}
      </div>
    </Container>
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
        <Lesson.Modal lesson={this.props.lesson} close={this.toggleModal} />
      )
    } else {
      return (
        <Lesson.Small
          lesson={this.props.lesson}
          moreDetails={this.toggleModal}
        />
      )
    }
  }
}
