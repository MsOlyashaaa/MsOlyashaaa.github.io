import { surveyConfig } from '@/config/surveyConfig.mjs';
import { Answer } from '@/types/Answer';
import { Question as QuestionType } from '@/types/Question';

export const getNextQuestionSlug = (answer: Answer, question: QuestionType): string | null => {
  const getQuestionSlugById = (id: string): string | null => surveyConfig.find((q) => q.id === id)?.slug || null;

  if (answer.nextId) {
    return getQuestionSlugById(answer.nextId);
  }

  if (question.nextId) {
    return getQuestionSlugById(question.nextId);
  }

  const currentQuestionIndex = surveyConfig.findIndex((q) => q.id === question.id);
  return currentQuestionIndex >= 0 && currentQuestionIndex < surveyConfig.length - 1
    ? surveyConfig[currentQuestionIndex + 1].slug
    : null;
};
