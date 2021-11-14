import React from 'react';

interface ButtonProps {
  children: JSX.Element | string;
  type: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  onClick?: () => void
}

const Button = ({ children, type, className, disabled = false, onClick }: ButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <button type={type}
      className={className}
      disabled={disabled}
      onClick={handleClick}>{children}</button>
  );
}
export default Button;
