import Button from 'components/Button'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store/reducer'
import { Answer } from 'store/slices/game'

import { restartGame } from '../store/slices/gameInit'

const EndGamePage: FC = () => {
  const dispatch = useDispatch()
  const answers = useSelector<RootState, Answer[]>(
    (state) => state.quiz.answers
  )
  const score = useSelector<RootState, number>(
    (state) => state.quiz.score as number
  )
  const restartHandler = () => {
    dispatch(restartGame())
  }
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-3xl text-purple-500 my-4'>Game Over</h1>
      <p className='text-2xl mb-4'>
        Your score was <span className='text-purple-400'>{score}</span>/10
      </p>
      <Button onClick={restartHandler}>Restart Game</Button>
      <div className='mt-4 p-4'>
        {answers.map((answer) => (
          <div
            className='border-b-2 border-purple-500 flex justify-between bg-white'
            key={answer.question}
          >
            <p
              className='p-2 mr-2'
              dangerouslySetInnerHTML={{ __html: answer.question }}
            ></p>
            <span
              className={`p-2 ${
                answer.correctAnswer === answer.answer
                  ? 'text-green-500'
                  : 'text-red-500'
              }`}
            >
              {answer.answer}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EndGamePage
