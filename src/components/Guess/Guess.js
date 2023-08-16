import React from 'react'

import { WORD_LENGTH } from '../../constants'
import { range } from '../../utils'
import { checkGuess } from '../../game-helpers'

function Guess({ guess = '', answer }) {
  let result
  if (guess) {
    result = checkGuess(guess, answer)
  }
  return (
    <p className="guess">
      {range(WORD_LENGTH).map((_, index) => (
        <span
          key={index}
          className={`cell ${result ? result[index].status : ''}`}
        >
          {result ? result[index].letter : undefined}
        </span>
      ))}
    </p>
  )
}

export default Guess
