import React, { Fragment } from 'react'
import { Modal, Header } from 'semantic-ui-react'
import hash from 'string-hash'
import { LessonIcon } from './icons'
import ReactMarkdown from 'react-markdown'

export function ModalLesson({ lesson, close }) {
  return (
    <Modal open={true} onClose={close} size="small">
      <Header>
        {lesson.title}
        <Header.Subheader>{lesson.subtitle}</Header.Subheader>
      </Header>
      <Modal.Content>
        <p>{lesson.description}</p>
        <Outputs outputs={lesson.outputs} />
        <Outcomes outcomes={lesson.outcomes} />
        <Reading reading={lesson.reading} />
      </Modal.Content>
    </Modal>
  )
}

function Outputs({ outputs }) {
  return (
    <Fragment>
      <p>Outputs</p>
      <ol>{outputs.map(o => <li key={hash(o)}>{o}</li>)}</ol>
    </Fragment>
  )
}

function Outcomes({ outcomes }) {
  return (
    <Fragment>
      <p>Outcomes</p>
      <ol>{outcomes.map(o => <li key={hash(o)}>{o}</li>)}</ol>
    </Fragment>
  )
}

function markdown(text) {
  return <ReactMarkdown source={text} />
}

function Reading({ reading }) {
  if (reading && reading.length > 0) {
    return (
      <Fragment>
        <p>Reading material</p>
        <ol>
          {reading.map(book => <li key={hash(book)}>{markdown(book)}</li>)}
        </ol>
      </Fragment>
    )
  } else {
    return null
  }
}
