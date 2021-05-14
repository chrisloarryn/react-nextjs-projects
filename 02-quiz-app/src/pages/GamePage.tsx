import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store/reducer'
import { answerQuestion } from 'store/slices/game'
import { finishGame } from 'store/slices/gameInit'


const GamePage = () => {
  const dispatch = useDispatch()
  const currentQuestion = useSelector<RootState, string>(state => state.quiz.questions[state.quiz.currentQuestionIndex as number].question)
  const score = useSelector<RootState, number>(state => state.quiz.score as number)
  const currentQuestionIndex = useSelector<RootState, number>(state => state.quiz.currentQuestionIndex as number)
  
  const answerHandler = (answer: 'True' | 'False') => {
    dispatch(answerQuestion({answer}))
  }
  const endGameHandler = () => {
    dispatch(finishGame())
  }
  return (
    <div>
      <p>Score: {score}</p>
      <p>{currentQuestionIndex+1}/10</p>
      <p dangerouslySetInnerHTML={{ __html: currentQuestion }}></p>
      <button onClick={() => answerHandler('True')}>True</button>
      <button onClick={() => answerHandler('False')}>False</button>
      <button onClick={endGameHandler}>Quiz Game</button>
    </div>
  )
}

export default GamePage
