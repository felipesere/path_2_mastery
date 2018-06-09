import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { AvailableLessons } from './available-lessons'
import { MyPath } from './my-path'
import { Menu } from 'semantic-ui-react'

function Navigation() {
  return (
    <Menu>
      <Menu.Item>
        <Link to="/">All cards</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/my-path">MyPath</Link>
      </Menu.Item>
    </Menu>
  )
}

export class Path2Mastery extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Route exact path="/" component={AvailableLessons} />
        <Route path="/my-path" component={MyPath} />
      </div>
    )
  }
}
