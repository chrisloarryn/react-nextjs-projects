import { createSlice } from '@reduxjs/toolkit'

export type Question = {
  category: string
  correct_answer: string
  difficulty: string
  incorrect_answers: string[]
  question: string
  type: string
}

export type PossibleResponse = 'True' | 'False'

export type Answer = {
  question: string
  answer: PossibleResponse
  correctAnswer: PossibleResponse
  isCorrect: boolean
}

export type QuizState = {
  questions: Question[],
  error: null | undefined
  score: null | undefined | number
  currentQuestionIndex: null | undefined | number
  answers: Answer[]
}

const initialState: QuizState = {
  questions: [] as Question[],
  error: null,
  score: null,
  currentQuestionIndex: undefined,
  answers: [] as Answer[]
}

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    fetchQuestionsSuccess: (state, action) => {
      state.questions = action.payload;
      state.score = 0;
      state.currentQuestionIndex = 0;
      state.answers = []
    },
    fetchQuestionsFail: (state, action) => {
      state.error = action.payload
    },
    answerQuestion: (state, action) => {
      const { correct_answer, question } = state.questions[state.currentQuestionIndex as number]
      state.score = action.payload.answer === correct_answer! ? state.score! + 1 : state.score! + 0
      state.answers.push({
        question: question,
        answer: action.payload.answer,
        correctAnswer: correct_answer as PossibleResponse,
        isCorrect: action.payload.answer === correct_answer
      })
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
