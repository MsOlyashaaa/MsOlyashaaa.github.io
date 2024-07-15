import { Question } from '@/types/Question';

export const getQuestionFieldOrId = (question: Question): string => {
  return question.field ?? question.id;
};

