import { Question } from '@/types/Question';
import { getQuestionFieldOrId } from '@/utils/getQuestionFieldOrId';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SurveyState {
  answers: Record<string, string>;
}

const initialState: SurveyState = {
  answers: {},
};

const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    saveAnswer(state, action: PayloadAction<{ question: Question; answer: string }>) {
      state.answers[getQuestionFieldOrId(action.payload.question)] = action.payload.answer;
    },
    clearAnswer(state, action: PayloadAction<{ question: Question }>) {
      delete state.answers[getQuestionFieldOrId(action.payload.question)];
    },
    clearAllAnswers(state) {
      state.answers = {};
    },
  },
});

export const { saveAnswer, clearAnswer,clearAllAnswers } = surveySlice.actions;
export default surveySlice.reducer;
