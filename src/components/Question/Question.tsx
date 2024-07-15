import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo_black from '@/assets/logo_black.svg';
import logo_white from '@/assets/logo_white.svg';
import Button from '@/components/Button';
import {
  Answers,
  BackIcon,
  Container,
  Header,
  Info,
  QuestionPage,
  Title,
} from '@/components/Question/styles';
import { surveyConfig } from '@/config/surveyConfig';
import { clearAnswer, saveAnswer } from '@/redux/slices/surveySlice';
import { RootState } from '@/redux/store';
import { Answer } from '@/types/Answer';
import { Question as QuestionType } from '@/types/Question';
import { SURVEY_PATH, SURVEY_RESULTS } from '@/utils/consts';
import { getNextQuestionId } from '@/utils/getNextQuestionId';
import { getQuestionFieldOrId } from '@/utils/getQuestionFieldOrId';
import { replacePlaceholders } from '@/utils/replacePlaceholders';

interface QuestionProps {
  question: QuestionType;
}

const Question: FC<QuestionProps> = ({ question }) => {
  const { id, hasSpecificDesign, question: questionText, info, answers } = question;

  const dispatch = useDispatch();
  const surveyAnswers = useSelector((state: RootState) => state.survey.answers);
  const prevAnswer = surveyAnswers[getQuestionFieldOrId(question)];
  const router = useRouter();
  const { locale } = router;
  const isFirstQuestion = surveyConfig[0].id === id;

  const logo = hasSpecificDesign ? logo_white : logo_black;

  const handleAnswer = (answer: Answer) => {
    dispatch(saveAnswer({ question, answer: answer.text }));
    const nextId = getNextQuestionId(answer, question);
    if (nextId) {
      router.push(`${SURVEY_PATH}/${nextId}`, undefined, { locale });
    } else {
      router.push(`${SURVEY_RESULTS}`, undefined, { locale });
    }
  };

  const handleBack = () => {
    if (prevAnswer) {
      dispatch(clearAnswer({ question }));
    }
    router.back();
  };

  return (
    <QuestionPage specific={hasSpecificDesign}>
      <Header>
        {!isFirstQuestion && <BackIcon onClick={handleBack} alt="chevron" />}
        <Image src={logo} alt="icon" />
      </Header>
      <Container>
        <Title centered={!!info}>{replacePlaceholders(questionText, surveyAnswers['gender'])}</Title>
        {info && <Info specific={hasSpecificDesign}>{info}</Info>}
        <Answers>
          {answers.map((answer) => (
            <Button specific={hasSpecificDesign} key={answer.text} onClick={() => handleAnswer(answer)}>
              {answer.text}
            </Button>
          ))}
        </Answers>
      </Container>
    </QuestionPage>
  );
};

export default Question;
