import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';
import logo_black from '@/assets/logo_black.svg';
import logo_white from '@/assets/logo_white.svg';
import { surveyConfig } from '@/config/surveyConfig.mjs';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { selectAllAnswers } from '@/redux/selectors';
import { clearAnswer, saveAnswer } from '@/redux/slices/surveySlice';
import { Answer } from '@/types/Answer';
import { Question as QuestionType } from '@/types/Question';
import { SURVEY_PATH, SURVEY_RESULTS } from '@/utils/consts.mjs';
import { getNextQuestionSlug } from '@/utils/getNextQuestionSlug';
import { getQuestionFieldOrId } from '@/utils/getQuestionFieldOrId';
import { replacePlaceholders } from '@/utils/replacePlaceholders';

interface UseQuestionLogicProps {
  question: QuestionType;
}

const useQuestionLogic = ({ question }: UseQuestionLogicProps) => {
  const { id, hasSpecificDesign, question: questionText } = question;
  const dispatch = useAppDispatch();
  const surveyAnswers = useAppSelector(selectAllAnswers);
  const prevAnswer = surveyAnswers[getQuestionFieldOrId(question)];
  const router = useRouter();
  const isFirstQuestion = surveyConfig[0].id === id;
  const title = replacePlaceholders(questionText, surveyAnswers['gender']);
  const logo = hasSpecificDesign ? logo_white : logo_black;

  const handleAnswer = useCallback(
    (answer: Answer) => {
      dispatch(saveAnswer({ question, answer: answer.text }));
      const nextQuestionSlug = getNextQuestionSlug(answer, question);
      if (nextQuestionSlug) {
        router.push(`${SURVEY_PATH}/${nextQuestionSlug}`);
      } else {
        router.push(`${SURVEY_RESULTS}`);
      }
    },
    [dispatch, question, router],
  );

  const handleBack = useCallback(() => {
    if (prevAnswer) {
      dispatch(clearAnswer({ question }));
    }
    router.back();
  }, [dispatch, prevAnswer, question, router]);

  useEffect(() => {
    if (Object.keys(surveyAnswers).length == 0) {
      router.push(`${SURVEY_PATH}/${surveyConfig[0].slug}`);
    }
  }, [router, surveyAnswers]);


  return {
    isFirstQuestion,
    logo,
    title,
    handleAnswer,
    handleBack,
  };
};

export default useQuestionLogic;
