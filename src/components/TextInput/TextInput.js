import React from 'react'

import { WORD_LENGTH } from '../../constants'

function TextInput({ handleGuess }) {
  const [guess, setGuess] = React.useState('')

  const onChange = (event) => {
    const text = event.target.value.toUpperCase()
    setGuess(text)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    setGuess('')
    handleGuess(guess)
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
        value={guess}
        onChange={onChange}
      />
    </form>
  )
}

export default TextInput
