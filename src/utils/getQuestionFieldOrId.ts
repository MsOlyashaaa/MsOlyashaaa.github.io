import { Question } from '@/types/Question';

export const getQuestionFieldOrId = (question: Question): string => question.field ?? question.id;

