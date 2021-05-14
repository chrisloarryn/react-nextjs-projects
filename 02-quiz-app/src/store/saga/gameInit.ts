import { cancel, delay, take, fork, put, call } from 'redux-saga/effects'

import { cancelGame, startGame } from './../slices/gameInit'
import { fetchQuestionsSuccess, fetchQuestionsFail} from './../slices/game'
import { fetchQuizFromAPI } from './../../utils/api'

// TODO: Delete this any type as soon as possible.
function* fetchQuestionsSaga(): any {
  try {
    yield delay(1000)
    const data = yield call(fetchQuizFromAPI)
    yield put(fetchQuestionsSuccess(data))
  } catch (err) {
    yield put(fetchQuestionsFail('There is an error fetching the questions.'))
  }
}

function* cancelFetchQuiz(forkedSaga: any): any {
  while (true) {
    yield take(cancelGame.type)
    yield cancel(forkedSaga)
  }
}

export default function* startGameSaga() {
  while (true) {
    yield take(startGame.type)
    // tslint:disable-next-line
    const forkedSaga: unknown = yield fork(fetchQuestionsSaga)
    yield fork(cancelFetchQuiz, forkedSaga)
  }
}
