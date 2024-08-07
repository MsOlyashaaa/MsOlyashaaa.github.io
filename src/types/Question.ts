import { Answer } from '@/types/Answer';

export interface Question {
  id: string;
  slug: string;
  question: string;
  field?: string;
  info?: string;
  nextId?: string;
  hasSpecificDesign?: boolean;
  answers: Answer[];
}