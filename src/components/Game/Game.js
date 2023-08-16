import React from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import GuessInput from '../GuessInput'
import GuessResults from '../GuessResults'
import EndGameBanner from '../EndGameBanner'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guesses, setGuesses] = React.useState([])
  const [gameEnded, setGameEnded] = React.useState({
    ended: false,
    hasWon: false,
  })

  const handleSubmitGuess = (guess) => {
    setGuesses((guesses) => [...guesses, guess])

    const hasWon = guess === answer

    if (hasWon || guesses.length >= NUM_OF_GUESSES_ALLOWED - 1) {
      setGameEnded({ ended: true, hasWon })
    }
  }

  return (
    <>
      {gameEnded.ended && (
        <EndGameBanner
          answer={answer}
          hasWon={gameEnded.hasWon}
          numGuesses={guesses.length}
        />
      )}
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameHasEnded={gameEnded.ended}
      />
    </>
  )
}

export default Game
