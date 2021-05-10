import { take, fork, put, call } from 'redux-saga/effects'

import { startGame } from './../slices/gameInit'
import { fetchQuestionsSuccess, fetchQuestionsFail} from './../slices/game'
import { fetchQuizFromAPI } from './../../utils/api'

// TODO: Delete this any type as soon as possible.
function* fetchQuestionsSaga(): any {
  try {
    const data = yield call(fetchQuizFromAPI)
    yield put(fetchQuestionsSuccess(data))
  } catch (err) {
    yield put(fetchQuestionsFail('There is an error fetching the questions.'))
  }
}

export default function* startGameSaga() {
  while (true) {
    yield take(startGame.type)
    yield fork(fetchQuestionsSaga)
  }
}
