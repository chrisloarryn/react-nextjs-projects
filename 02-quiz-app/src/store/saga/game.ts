import { delay, put, race, take } from 'redux-saga/effects';

import { answerQuestion, fetchQuestionsSuccess, nextQuestion } from '../slices/game'
import { finishGame } from '../slices/gameInit'

function* answersSaga() {
  for (let i = 0; i < 10; i++) {
    yield take(answerQuestion.type)
    yield put(nextQuestion())
  }
}

export default function* gameSaga() {
  while (true) {
    yield take(fetchQuestionsSuccess.type)

    yield race({
      delay: delay(60000),
      done: answersSaga()
    })

    yield put(finishGame())
  }
}