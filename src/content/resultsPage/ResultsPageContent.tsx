import Button from '@/components/Button';
import { surveyConfig } from '@/config/surveyConfig';
import { clearAllAnswers } from '@/redux/slices/surveySlice';
import { RootState } from '@/redux/store';
import { SURVEY_PATH } from '@/utils/consts';
import { findQuestion } from '@/utils/getQuestionByIdOrFiled';
import { replacePlaceholders } from '@/utils/replacePlaceholders';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Results.module.css';

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
    <div className={styles.result_page}>
      <h1 className={styles.title}>Results</h1>
      <ul className={styles.question_answers}>
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
      </ul>
      <Button onClick={handleTryClick}>Try one more time</Button>
    </div>
  );
};

export default ResultsPageContent;
