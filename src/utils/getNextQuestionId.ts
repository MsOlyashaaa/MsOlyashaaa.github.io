import { surveyConfig } from '@/config/surveyConfig';
import { Answer } from '@/types/Answer';
import { Question as QuestionType } from '@/types/Question';

export const getNextQuestionId = (answer: Answer, question: QuestionType): string | null => {
  if (answer.nextId) {
    return answer.nextId;
  }
  if (question.nextId) {
    return question.nextId;
  }

  const currentQuestionIndex = surveyConfig.findIndex((q) => q.id === question.id);
  const nextQuestion = surveyConfig[currentQuestionIndex + 1];

  return nextQuestion ? nextQuestion.id : null;
};