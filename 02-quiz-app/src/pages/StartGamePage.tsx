import { FC, useState, BaseSyntheticEvent } from 'react'
import { useDispatch } from 'react-redux'

import { startGame } from '../store/slices/gameInit'

const StartGamePage: FC = () => {
  const [username, setUsername] = useState('')
  const dispatch = useDispatch()
  const handleUserNameChange =
    ({ target }: BaseSyntheticEvent) =>
      setUsername(target.value)
  const startGameHandler =
    () =>
      dispatch(startGame({ username }))
  return (
    <div>   
      <input
        type='text'
        value={username}
        onChange={handleUserNameChange}
        placeholder='Your name...'
      />
      <button onClick={startGameHandler}>Start Game</button>
    </div>
  )
}

export default StartGamePage
