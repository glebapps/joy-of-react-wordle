import React from 'react'

import { WORD_LENGTH } from '../../constants'
import { range } from '../../utils'
import { checkGuess } from '../../game-helpers'

function Guess({ value, answer }) {
  let result
  if (value) {
    result = checkGuess(value, answer)
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
