import React from 'react';
interface InputProps {
  type: 'text' | 'select' | 'textarea' | 'submit' | 'email' | 'number' | 'password' | 'date';
  className?: string;
  placeholder?: string;
  onChange?: () => void;
  name?: string;
  value?: string;
  validate?: any
}

const Input = ({ type, className, placeholder, name, value, validate }: InputProps) => {
  return (
    <>
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        name={name}
        value={value}
        {...validate} />
      <span className="msg-error"></span>
    </>
  );
};
export default Input;
