import React from 'react'

import { WORD_LENGTH } from '../../constants'

function GuessInput({ handleSubmitGuess, gameHasEnded }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('')

  const onChange = (event) => {
    const text = event.target.value.toUpperCase()
    setTentativeGuess(text)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    setTentativeGuess('')
    handleSubmitGuess(tentativeGuess)
  }

  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        minLength={WORD_LENGTH}
        maxLength={WORD_LENGTH}
        pattern={`[a-zA-Z]{${WORD_LENGTH}}`}
        title={`${WORD_LENGTH} letter word`}
        disabled={gameHasEnded}
        value={tentativeGuess}
        onChange={onChange}
      />
    </form>
  )
}

export default GuessInput
