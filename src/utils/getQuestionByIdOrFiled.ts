import { surveyConfig } from '@/config/surveyConfig';
import { Question } from '@/types/Question';

export const findQuestion = (searchField: string): Question => {
  return <Question>(
    surveyConfig.find((question) => question.id === searchField) ||
    surveyConfig.find((question) => question.field === searchField)
  );
};
