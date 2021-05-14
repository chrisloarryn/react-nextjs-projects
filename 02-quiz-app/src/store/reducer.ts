import { combineReducers } from "redux";

import gameState, { GameState } from './slices/gameInit'
import quiz, { QuizState } from './slices/game'

export type RootState = {
  gameState: GameState;
  quiz: QuizState;
}

export default combineReducers<RootState>({
  gameState,
  quiz
})