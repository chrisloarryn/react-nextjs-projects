import { FC } from 'react'
import { useSelector } from 'react-redux'

import StartGamePage from './StartGamePage'
import GamePage from './GamePage'
import FetchingPage from './FetchingPage'
import EndGamePage from './EndGamePage'

import * as stages from './../utils/constants'

const MainPage: FC = () => {
  const currentStage = useSelector((state: any) => state.gameState.stage)
  let displayedPage
  switch (currentStage) {
    case stages.START_GAME:
      displayedPage = <StartGamePage />
      break
    case stages.FETCHING_GAME:
      displayedPage = <FetchingPage />
      break
    case stages.GAME:
      displayedPage = <GamePage />
      break
    case stages.END_GAME:
      displayedPage = <EndGamePage />
      break
    default:
      break
  }
  return (
    <>
     {displayedPage} 
    </>
  )
}

export default MainPage
