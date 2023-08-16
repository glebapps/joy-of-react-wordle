import React from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import GuessInput from '../GuessInput'
import GuessResults from '../GuessResults'
import WonBanner from '../WonBanner'
import LostBanner from '../LostBanner'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

// Pick a random word on every pageload.
// const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer })

function Game() {
  const [answer, setAnswer] = React.useState(() => {
    return sample(WORDS)
  })
  console.info({ answer })
  const [guesses, setGuesses] = React.useState([])
  const [gameStatus, setGameStatus] = React.useState('running')

  const handleSubmitGuess = (guess) => {
    const nextGuesses = [...guesses, guess]
    setGuesses((guesses) => nextGuesses)

    if (guess === answer) {
      setGameStatus('won')
      return
    }

    if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost')
      return
    }
  }

  const restartGame = () => {
    setAnswer(sample(WORDS))
    setGuesses([])
    setGameStatus('running')
    console.info({ answer })
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameHasEnded={gameStatus !== 'running'}
      />
      {gameStatus === 'won' && (
        <WonBanner numGuesses={guesses.length} restartGame={restartGame} />
      )}
      {gameStatus === 'lost' && (
        <LostBanner answer={answer} restartGame={restartGame} />
      )}
    </>
  )
}

export default Game
