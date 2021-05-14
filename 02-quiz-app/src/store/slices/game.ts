import { createSlice } from '@reduxjs/toolkit'

export type Question = {
  category: string
  correct_answer: string
  difficulty: string
  incorrect_answers: string[]
  question: string
  type: string
}

export type QuizState = {
  questions: Question[],
  error: null | undefined
  score: null | undefined | number
  currentQuestionIndex: null | undefined | number
}

const initialState: QuizState = {
  questions: [] as Question[],
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
    },
    answerQuestion: (state, action) => {
      const currentQuestion = state.questions[state.currentQuestionIndex as number]
      state.score = action.payload.answer === (currentQuestion as any).correct_answer! ? state.score! + 1 : state.score! + 0
    },
    nextQuestion: (state) => {
      (state.currentQuestionIndex as number) += 1
    }
  }
})

export const {
  answerQuestion,
  nextQuestion,
  fetchQuestionsFail,
  fetchQuestionsSuccess,
} = quizSlice.actions

export default quizSlice.reducer
