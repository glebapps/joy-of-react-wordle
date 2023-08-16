import React from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import TextInput from '../TextInput'
import Guesses from '../Guesses'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  // guess = { id: 1, value: 'ABCDE' }
  const [guesses, setGuesses] = React.useState([])

  const handleGuess = (guess) => {
    setGuesses((guesses) => [
      ...guesses,
      { id: crypto.randomUUID(), value: guess },
    ])
  }

  return (
    <>
      <Guesses guesses={guesses} />
      <TextInput handleGuess={handleGuess} />
    </>
  )
}

export default Game
