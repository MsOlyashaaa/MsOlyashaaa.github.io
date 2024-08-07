import { surveyConfig } from '@/config/surveyConfig.mjs';
import { Question } from '@/types/Question';

export const findQuestion = (searchField: string): Question => <Question>(
    surveyConfig.find((question) => question.id === searchField) ||
    surveyConfig.find((question) => question.field === searchField)
  );
