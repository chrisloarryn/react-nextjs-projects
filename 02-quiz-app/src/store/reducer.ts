import { combineReducers } from "redux";

import gameState from './slices/gameInit'
import quiz from './slices/game'

export default combineReducers({
  gameState,
  quiz
})