import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { surveyConfig } from '@/config/surveyConfig';
import { QuestionAnswers, ResultPage, StyledButton, Title } from '@/content/resultsPage/styles';
import { clearAllAnswers } from '@/redux/slices/surveySlice';
import { RootState } from '@/redux/store';
import { SURVEY_PATH } from '@/utils/consts';
import { findQuestion } from '@/utils/getQuestionByIdOrFiled';
import { replacePlaceholders } from '@/utils/replacePlaceholders';

const ResultsPageContent = () => {
  const dispatch = useDispatch();
  const surveyAnswers = useSelector((state: RootState) => state.survey.answers);

  const router = useRouter();
  const path = surveyConfig[0];

  const handleTryClick = () => {
    dispatch(clearAllAnswers());
    router.replace(`${SURVEY_PATH}/${path.id}`);
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
