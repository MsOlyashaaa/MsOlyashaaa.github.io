import { GetStaticPaths, GetStaticProps } from 'next';
import Question from '@/components/Question';
import { surveyConfig } from '@/config/surveyConfig';
import { Question as QuestionType } from '@/types/Question';

interface QuestionProps {
  question: QuestionType;
}

const QuestionPage = ({ question }: QuestionProps) => <Question question={question} />;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = surveyConfig.map((question) => ({
    params: { id: question.id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || typeof params.id !== 'string') {
    return {
      notFound: true,
    };
  }

  const question = surveyConfig.find((q) => q.id === params.id);
  return { props: { question } };
};

export default QuestionPage;
