import React from 'react'
import { Lesson } from './lesson/lesson'
import { FilterMenu } from './filter-menu/filter-menu'
import { Accordion, Icon } from 'semantic-ui-react'

class CollapsableFilter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }

  handleClick() {
    this.setState({ open: !this.state.open })
  }

  render() {
    return (
      <Accordion fluid styled>
        <Accordion.Title
          active={this.state.open}
          index={0}
          onClick={this.handleClick.bind(this)}
        >
          <Icon name="dropdown" />
          Filter Options
        </Accordion.Title>
        <Accordion.Content active={this.state.open}>
          <FilterMenu />
        </Accordion.Content>
      </Accordion>
    )
  }
}

export function AvailableLessons({ lessons }) {
  return (
    <React.Fragment>
      <CollapsableFilter />
      <div className="available-lessons">
        {lessons.map(lesson => (
          <ModalOrLesson lesson={lesson} key={lesson.id} />
        ))}
      </div>
    </React.Fragment>
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
