import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { AvailableLessons } from './available-lessons'
import { MyPathContainer } from './my-path'
import { Menu, Loader } from 'semantic-ui-react'

function Navigation() {
  return (
    <Menu>
      <Menu.Item>
        <Link to="/">All Lessons</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/my-path">My Path</Link>
      </Menu.Item>
    </Menu>
  )
}

export class Path2Mastery extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: true, lessons: [] }
  }

  componentDidMount() {
    fetch('http://localhost:3030/lessons')
      .then(response => response.json())
      .then(downloaded_lessons => {
        setTimeout(() => {
          this.setState({ loading: false, lessons: downloaded_lessons })
        }, 500)
      })
  }

  render() {
    if (this.state.loading) {
      return (
        <Loader active size="large">
          Loading lessons
        </Loader>
      )
    } else {
      return (
        <div>
          <Navigation />
          <Route
            exact
            path="/"
            render={() => <AvailableLessons lessons={this.state.lessons} />}
          />
          <Route
            exact
            path="/my-path"
            render={() => <MyPathContainer lessons={this.state.lessons} />}
          />
        </div>
      )
    }
  }
}
