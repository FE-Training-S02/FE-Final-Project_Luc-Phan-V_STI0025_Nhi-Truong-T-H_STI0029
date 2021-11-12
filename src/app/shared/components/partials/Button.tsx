import React from "react";

interface PropsButton {
  children: JSX.Element | string,
  type: 'button' | 'submit' | 'reset',
  className?: string,
  disabled?: boolean,
  onClick?: () => void
}

export const Button = (props: PropsButton) => {
  const { children, type, className, disabled = false, onClick } = props;
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else return;
  };
  return (
    <button type={type} className={className} disabled={disabled} onClick={() => handleClick()}>{children}</button>
  )
}
