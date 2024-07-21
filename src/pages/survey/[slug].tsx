import { GetStaticPaths, GetStaticProps } from 'next';
import Question from '@/components/Question';
import { surveyConfig } from '@/config/surveyConfig.mjs';
import { Question as QuestionType } from '@/types/Question';

interface QuestionProps {
  question: QuestionType;
}

const QuestionPage = ({ question }: QuestionProps) => <Question question={question} />;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = surveyConfig.map((question) => ({
    params: { slug: question.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || typeof params.slug !== 'string') {
    return {
      notFound: true,
    };
  }

  const question = surveyConfig.find((q) => q.slug === params.slug);
  return { props: { question } };
};

export default QuestionPage;
