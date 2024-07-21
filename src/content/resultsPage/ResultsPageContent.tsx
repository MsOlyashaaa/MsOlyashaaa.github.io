import { useRouter } from 'next/router';
import { surveyConfig } from '@/config/surveyConfig.mjs';
import { QuestionAnswers, ResultPage, StyledButton, Title } from '@/content/resultsPage/styles';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { selectAllAnswers } from '@/redux/selectors';
import { clearAllAnswers } from '@/redux/slices/surveySlice';
import { SURVEY_PATH } from '@/utils/consts.mjs';
import { findQuestion } from '@/utils/getQuestionByIdOrFiled';
import { replacePlaceholders } from '@/utils/replacePlaceholders';

const ResultsPageContent = () => {
  const dispatch = useAppDispatch();
  const surveyAnswers = useAppSelector(selectAllAnswers);
  const router = useRouter();
  const path = surveyConfig[0];

  const handleTryClick = () => {
    dispatch(clearAllAnswers());
    router.replace(`${SURVEY_PATH}/${path.slug}`);
  };

  return (
    <ResultPage>
      <Title>Results</Title>
      <QuestionAnswers>
        {Object.keys(surveyAnswers).map((key) => {
          const question = findQuestion(key);

          return (
            !question.hasSpecificDesign && (
              <li key={key}>
                <strong>
                  {replacePlaceholders(question.question, surveyAnswers['gender'])} {question.info}
                </strong>{' '}
                {surveyAnswers[key]}
              </li>
            )
          );
        })}
      </QuestionAnswers>
      <StyledButton onClick={handleTryClick}>Try one more time</StyledButton>
    </ResultPage>
  );
};

export default ResultsPageContent;
