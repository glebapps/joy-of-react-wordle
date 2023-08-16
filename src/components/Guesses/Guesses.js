import React from 'react'
import Guess from '../Guess'

import { range } from '../../utils'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

function Guesses({ guesses = [] }) {
  const rows = range(NUM_OF_GUESSES_ALLOWED)

  return (
    <div className="guess-results">
      {rows.map((_, index) => (
        <Guess key={index} guess={guesses[index]} />
      ))}
    </div>
  )
}

export default Guesses
