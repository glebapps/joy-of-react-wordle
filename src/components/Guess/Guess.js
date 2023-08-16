import React from 'react'

import { WORD_LENGTH } from '../../constants'

function Guess({ guess = '' }) {
  const word = guess || ' '.repeat(WORD_LENGTH)
  return (
    <p className="guess">
      {[...word].map((letter, index) => (
        <span key={index} className="cell">
          {letter}
        </span>
      ))}
    </p>
  )
}

export default Guess
