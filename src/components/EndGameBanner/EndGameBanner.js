import React from 'react'

function EndGameBanner({ hasWon, answer, numGuesses, restartGame }) {
  return (
    <div className={`banner ${hasWon ? 'happy' : 'sad'}`}>
      {hasWon ? (
        <p>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>
            {numGuesses} {numGuesses > 1 ? 'guesses' : 'guess'}
          </strong>
          .
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
      <button onClick={restartGame} className="restart-game-btn">
        Restart game
      </button>
    </div>
  )
}

export default EndGameBanner
