import styled from 'styled-components';
import { colors } from '@/styles/colors';

export const StyledButton = styled.button<{ specific?: boolean }>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 64px;
  gap: 25px;
  padding: 12px 25px;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  border: 1px solid ${colors.lightGray};
  box-shadow: 2px 2px 6px ${colors.deepPurple};
  background: ${colors.lightLavender};
  color: ${colors.black};
  cursor: pointer;
  transition: box-shadow 0.2s ease;
  -webkit-tap-highlight-color: transparent;
  outline: none;

  ${({ specific }) =>
    specific
      ? `
    padding: 14px 145px 15px;
    gap: 10px;
    height: 50px;
    border-radius: 12px;
    font-size: 18px;
    line-height: 21px;
    background: ${colors.snowWhite};
    box-shadow: 0 4px 4px ${colors.lightSilver25};
    color:${colors.royalPurple};
    `
      : ''}
  &:hover {
    box-shadow: 5px 5px 16px ${colors.deepLavender25};
  }

  &:active {
    background: ${colors.purpleGradient};
    color: ${colors.snowWhite};
  }
`;
