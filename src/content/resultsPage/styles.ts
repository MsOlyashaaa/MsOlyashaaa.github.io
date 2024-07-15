import styled from 'styled-components';
import { colors } from '@/styles/colors';
import Button from '@/components/Button';

export const ResultPage = styled.div`
  display: flex;
  flex-direction: column;
  background: ${colors.lightPink};
  position: relative;
  min-height: 100vh;
  fill: ${colors.darkGray};
  padding: 30px;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 30px;
`;

export const QuestionAnswers = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  margin-bottom: 20px;
`;

export const StyledButton = styled(Button)`
    width: 250px;
`;
