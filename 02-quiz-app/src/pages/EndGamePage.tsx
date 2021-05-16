import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store/reducer'
import { Answer } from 'store/slices/game'

import { restartGame } from '../store/slices/gameInit'

const EndGamePage: FC = () => {
  const dispatch = useDispatch()
  const answers = useSelector<RootState, Answer[]>(state => state.quiz.answers)
  const score = useSelector<RootState, number>(state => state.quiz.score as number)
  const restartHandler = () => {
    dispatch(restartGame())
  }
  return (
    <div>
      <p>Your score was {score}/10</p>
      <button onClick={restartHandler}>Restart Game</button>
      {answers.map((answer) => (
        <div key={answer.question}>
          <p dangerouslySetInnerHTML={{__html: answer.question}}></p>
          - {answer.answer} - {answer.correctAnswer}
        </div>
      ))}
    </div>
  )
}

export default EndGamePage
