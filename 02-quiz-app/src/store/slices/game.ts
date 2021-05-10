import { createSlice } from '@reduxjs/toolkit'

type InitialState = {
  questions: [],
  error: null | undefined
  score: null | undefined | number
  currentQuestionIndex: null | undefined | number
}

const initialState: InitialState = {
  questions: [],
  error: null,
  score: null,
  currentQuestionIndex: undefined
}

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    fetchQuestionsSuccess: (state, action) => {
      state.questions = action.payload;
      state.score = 0;
      state.currentQuestionIndex = 0;
    },
    fetchQuestionsFail: (state, action) => {
      state.error = action.payload
    }
  }
})

export const { fetchQuestionsSuccess, fetchQuestionsFail } = quizSlice.actions

export default quizSlice.reducer
