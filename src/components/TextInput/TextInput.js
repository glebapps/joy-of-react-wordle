import React from 'react'

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
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={guess}
        onChange={onChange}
      />
    </form>
  )
}

export default TextInput
