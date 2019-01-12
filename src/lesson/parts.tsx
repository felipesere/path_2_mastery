import React from 'react'
import hash from 'string-hash'
import ReactMarkdown from 'react-markdown'
import {Outcomes, Outputs, Readings} from "../types";


type OutputsProps = {
    outputs: Outputs
}

const Outputs = ({ outputs }: OutputsProps) => {
  return (
    <React.Fragment>
      <p>Outputs</p>
      <ol>
        {outputs.map(o => (
          <li key={hash(o)}>{o}</li>
        ))}
      </ol>
    </React.Fragment>
  )
}

type OutcomesProps = {
    outcomes: Outcomes
}
const Outcomes = ({ outcomes }: OutcomesProps) => {
  return (
    <React.Fragment>
      <p>Outcomes</p>
      <ol>
        {outcomes.map(o => (
          <li key={hash(o)}>{o}</li>
        ))}
      </ol>
    </React.Fragment>
  )
}

const markdown = (text: string) => <ReactMarkdown source={text}/>;

type ReadingProps = {
    reading: Readings
}
const Reading = ({ reading }: ReadingProps ) => {
  if (reading && reading.length > 0) {
    return (
      <React.Fragment>
        <p>Reading material</p>
        <ol>
          {reading.map(book => (
            <li key={hash(book)}>{markdown(book)}</li>
          ))}
        </ol>
      </React.Fragment>
    )
  } else {
    return null
  }
}

export const Parts = {
    Outputs: Outputs,
    Outcomes: Outcomes,
    Reading: Reading
}

