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
    <div className="form-group">
      <div className="input-group">
        <input
          type={type}
          className={className}
          placeholder={placeholder}
          name={name}
          value={value}
          {...validate} />
        <label className="form-label">{placeholder}</label>
        <span className="msg-error"></span>
      </div>
    </div>
  );
};
export default Input;
