import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { Path2Mastery } from './path-2-mastery'

ReactDOM.render(
  <BrowserRouter>
    <Path2Mastery />
  </BrowserRouter>,
  document.getElementById('app')
)
