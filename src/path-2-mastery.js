import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { CardGrid } from './card-grid'
import { MyPath } from './my-path'

function Navigation() {
  return (
    <div>
      <Link to="/">All cards</Link>
      <Link to="/my-path">MyPath</Link>
    </div>
  )
}

export class Path2Mastery extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Route exact path="/" component={CardGrid} />
        <Route path="/my-path" component={MyPath} />
      </div>
    )
  }
}
