import { createSlice } from '@reduxjs/toolkit'

import { fetchQuestionsSuccess, fetchQuestionsFail } from './game'

import * as stages from './../../utils/constants'

const initialState = {
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

export const { startGame } = gameState.actions

export default gameState.reducer
