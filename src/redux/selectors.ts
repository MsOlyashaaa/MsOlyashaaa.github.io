import { RootState } from '@/redux/store';

export const selectAllAnswers = (state: RootState) => state.survey.answers;
