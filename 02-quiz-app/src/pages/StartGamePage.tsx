import { FC, useState, BaseSyntheticEvent } from 'react'
import { useDispatch } from 'react-redux'

import Button from './../components/Button'
import { startGame } from '../store/slices/gameInit'

const StartGamePage: FC = () => {
  const [username, setUsername] = useState('')
  const dispatch = useDispatch()
  const handleUserNameChange = ({ target }: BaseSyntheticEvent) =>
    setUsername(target.value)
  const startGameHandler = () => dispatch(startGame({ username }))
  return (
    <div className='flex flex-col justify-center items-center mt-80'>
      <input
        type='text'
        value={username}
        onChange={handleUserNameChange}
        placeholder='Your name...'
        className='py-2 px-4 outline-none rounded shadow w-64 mb-6'
      />
      <Button onClick={startGameHandler}>Start Game</Button>
    </div>
  )
}

export default StartGamePage
