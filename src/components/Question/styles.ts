import styled from 'styled-components';
import { colors } from '@/styles/colors';
import { ChevronIcon } from '@/assets/ChevronIcon';

export const QuestionPage = styled.div<{ specific?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.lightPink};
  position: relative;
  min-height: 100vh;
  color: ${colors.darkGray};
  fill: ${colors.darkGray};

  ${({ specific }) =>
    specific
      ? `
    text-align: center;
    color: ${colors.snowWhite};
    background: ${colors.purpleGradient};
    svg path {
        fill: ${colors.snowWhite};
    }
    `
      : ''}
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 54px;
  margin-bottom: 20px;
  position: relative;
  max-width: 1362px;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 330px;
  box-sizing: border-box;
`;

export const Title = styled.h1<{ centered?: boolean }>`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 30px;
  text-align: ${({ centered }) => (centered ? 'center' : 'left')};
`;

export const Info = styled.h2<{ specific?: boolean }>`
  font-weight: bold;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  color: ${colors.darkGray};
  margin: -10px 0 30px;

  ${({ specific }) =>
    specific
      ? `
    font-weight: 300;
    font-size: 14px;
    line-height: 180%;
    color:  ${colors.snowWhite};
    margin: -10px 0 40px;
    }
    `
      : ''}
`;

export const Answers = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
`;

export const BackIcon = styled(ChevronIcon)`
  cursor: pointer;
  position: absolute;
  left: 15px;
`;
