import { ButtonHTMLAttributes, FC } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  specific?: boolean;
}

const Button: FC<ButtonProps> = ({ specific, children, ...props }) => {
  return (
    <button className={`${styles.button} ${specific ? styles.button_specific : ''}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
