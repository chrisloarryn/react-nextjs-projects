import { FC } from 'react'
import { useDispatch } from 'react-redux'

import { cancelGame } from 'store/slices/gameInit'

const FetchingPage: FC = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <p>Loading</p>
      <button onClick={() => dispatch(cancelGame())}>Cancel</button>
    </div>
  )
}

export default FetchingPage
