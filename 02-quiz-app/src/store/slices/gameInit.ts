import { createSlice } from '@reduxjs/toolkit'

import { fetchQuestionsSuccess, fetchQuestionsFail } from './game'

import * as stages from './../../utils/constants'

export type GameState = {
  stage: 'START_GAME' | 'GAME' | 'FETCHING_GAME' | 'END_GAME'
  username: string
}

const initialState: GameState = {
  stage: stages.START_GAME,
  username: ''
}

const gameState = createSlice({
  name: 'gameState',
  initialState,
  reducers: {
    startGame: (state, action) => {
      state.username = action.payload.username
      state.stage = stages.FETCHING_GAME
    },
    cancelGame: (state) => {
      state.stage = stages.START_GAME
    },
    finishGame: (state) => {
      state.stage = stages.END_GAME
    },
    restartGame: (state) => {
      state.stage = stages.START_GAME
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestionsSuccess, (state) => {
        state.stage = stages.GAME
      })
      .addCase(fetchQuestionsFail, (state) => {
        state.stage = stages.START_GAME
      })
  }
})

export const { finishGame, startGame, cancelGame, restartGame } = gameState.actions

export default gameState.reducer
