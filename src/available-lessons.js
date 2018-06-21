import React from 'react'
import { Lesson } from './lesson/lesson'
import { Input, Form, Checkbox, Segment, Radio } from 'semantic-ui-react'

const paradigms = {
  title: 'Paradigms',
  choices: [
    { label: 'All', value: 'all' },
    { label: 'Static', value: 'static' },
    { label: 'Dynamic', value: 'dynamic' },
    { label: 'Functional', value: 'functional' }
  ]
}

const areasOfFocus = {
  title: 'Areas Of Focus',
  choices: [
    { label: 'All', value: 'all' },
    { label: 'Design', value: 'design' },
    { label: 'UI and UX', value: 'ui-and-ux' },
    { label: 'Languages', value: 'languages' },
    { label: 'Testing', value: 'testing' },
    { label: 'Consulting', value: 'consulting' }
  ]
}

class RadioButtons extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: 'all' }
    this.handleChange = (e, { value }) => this.setState({ value }).bind(this)
  }

  render() {
    return (
      <Form>
        <legend>{this.props.definition.title}</legend>
        {this.props.definition.choices.map(choice => {
          return (
            <Form.Field key={choice.label}>
              <Checkbox
                radio
                label={choice.label}
                name="choices"
                value={choice.value}
                checked={this.state.value === choice.value}
                onChange={this.handleChange}
              />
            </Form.Field>
          )
        })}
      </Form>
    )
  }
}

const Search = () => <Input placeholder="Search..." />

const HideCompleted = () => <Radio toggle label="Hide Completed" />

const Paradigms = () => <RadioButtons definition={paradigms} />
const AreasOfFocus = () => <RadioButtons definition={areasOfFocus} />

export function AvailableLessons({ lessons }) {
  return (
    <React.Fragment>
      <div className="filters" />
      <Segment.Group horizontal>
        <Segment.Group vertical>
          <Segment>
            <Search />
          </Segment>
          <Segment>
            <HideCompleted />
          </Segment>
        </Segment.Group>
        <Segment>
          <Paradigms />
        </Segment>
        <Segment>
          <AreasOfFocus />
        </Segment>
      </Segment.Group>

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
