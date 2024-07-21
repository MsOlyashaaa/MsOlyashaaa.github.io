import Image from 'next/image';
import { FC } from 'react';
import Button from '@/components/Button';
import { Answers, BackIcon, Container, Header, Info, QuestionPage, Title } from '@/components/Question/styles';
import useQuestionLogic from '@/hooks/useQuestionLogic';
import { Question as QuestionType } from '@/types/Question';

interface QuestionProps {
  question: QuestionType;
}

const Question: FC<QuestionProps> = ({ question }) => {
  const { isFirstQuestion, logo, handleAnswer, handleBack, title } = useQuestionLogic({ question });

  const { info, answers, hasSpecificDesign } = question;

  return (
    <QuestionPage specific={hasSpecificDesign}>
      <Header>
        {!isFirstQuestion && <BackIcon onClick={handleBack} alt="chevron" />}
        <Image src={logo} alt="icon" />
      </Header>
      <Container>
        <Title $centered={!!info}>{title}</Title>
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
