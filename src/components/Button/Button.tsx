import { ButtonHTMLAttributes, FC } from 'react';
import { StyledButton } from '@/components/Button/styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  specific?: boolean;
}

const Button: FC<ButtonProps> = ({ specific, children, ...props }) => (
  <StyledButton specific={specific} {...props}>
    {children}
  </StyledButton>
);

export default Button;
