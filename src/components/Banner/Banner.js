import React from 'react'

function Banner({ status, restartGame, children }) {
  return (
    <div className={`banner ${status}`}>
      {children}
      <button onClick={restartGame} className="restart-game-btn">
        Restart game
      </button>
    </div>
  )
}

export default Banner
