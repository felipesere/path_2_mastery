import React from 'react'
import { Modal, Header } from 'semantic-ui-react'
import { Parts } from './parts'

export function ModalLesson({ lesson, close }) {
  return (
    <Modal open={true} onClose={close} size="small">
      <Header>
        {lesson.title}
        <Header.Subheader>{lesson.subtitle}</Header.Subheader>
      </Header>
      <Modal.Content>
        <p>{lesson.description}</p>
        <Parts.Outputs outputs={lesson.outputs} />
        <Parts.Outcomes outcomes={lesson.outcomes} />
        <Parts.Reading reading={lesson.reading} />
      </Modal.Content>
    </Modal>
  )
}
