import React from 'react'
import Banner from '../Banner'

function WonBanner({ numGuesses, restartGame }) {
  return (
    <Banner status="happy" restartGame={restartGame}>
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>
          {numGuesses} {numGuesses > 1 ? 'guesses' : 'guess'}
        </strong>
        .
      </p>
    </Banner>
  )
}

export default WonBanner
