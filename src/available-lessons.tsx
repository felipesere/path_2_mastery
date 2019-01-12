import React from 'react'
import {Lesson} from './lesson/lesson'
import {Container} from 'semantic-ui-react'
import {LessonType} from "./types";

export function AvailableLessons({lessons}: { lessons: Array<LessonType> }) {
    return (
        <Container>
            <div className="available-lessons">
                {lessons.map(lesson => (
                    <ModalOrLesson lesson={lesson} key={lesson.id}/>
                ))}
            </div>
        </Container>
    )
}

type ModalOrLessonProps = {
    lesson: LessonType,
}

type ModalOrLessonState = {
    displayDetails: boolean
}

class ModalOrLesson extends React.Component<ModalOrLessonProps, ModalOrLessonState> {
    constructor(props: ModalOrLessonProps) {
        super(props);
        this.state = {displayDetails: false};
    }

    toggleModal = () => {
        this.setState({displayDetails: !this.state.displayDetails})
    }

    render() {
        if (this.state.displayDetails) {
            return (
                <Lesson.Modal lesson={this.props.lesson} close={this.toggleModal}/>
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
