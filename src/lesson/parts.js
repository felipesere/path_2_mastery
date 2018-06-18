import React from 'react'
import hash from 'string-hash'
import ReactMarkdown from 'react-markdown'

export const Parts = {
  Outputs: Outputs,
  Outcomes: Outcomes,
  Reading: Reading
}

function Outputs({ outputs }) {
  return (
    <React.Fragment>
      <p>Outputs</p>
      <ol>{outputs.map(o => <li key={hash(o)}>{o}</li>)}</ol>
    </React.Fragment>
  )
}

function Outcomes({ outcomes }) {
  return (
    <React.Fragment>
      <p>Outcomes</p>
      <ol>{outcomes.map(o => <li key={hash(o)}>{o}</li>)}</ol>
    </React.Fragment>
  )
}

function markdown(text) {
  return <ReactMarkdown source={text} />
}

function Reading({ reading }) {
  if (reading && reading.length > 0) {
    return (
      <React.Fragment>
        <p>Reading material</p>
        <ol>
          {reading.map(book => <li key={hash(book)}>{markdown(book)}</li>)}
        </ol>
      </React.Fragment>
    )
  } else {
    return null
  }
}
