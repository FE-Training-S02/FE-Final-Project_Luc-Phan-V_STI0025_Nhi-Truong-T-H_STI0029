import React from 'react';
interface InputProps {
  type: 'text' | 'select' | 'textarea' | 'submit' | 'email' | 'number' | 'password' | 'date';
  className?: string;
  placeholder?: string;
  onChange?: () => void;
  name?: string;
  value?: string;
  errors?: any;
  validate?: any
}

const Input = ({ type, className, placeholder, name, value, errors, validate }: InputProps) => {
  return (
    <div className="form-group">
      <div className="input-group">
        <input
          type={type}
          className={`form-control ${className}`}
          placeholder={placeholder}
          name={name}
          value={value}
          {...validate} />
        <label className="form-label">{placeholder}</label>
        {errors && <span className="msg-error">{errors.message}</span>}
      </div>
    </div>
  );
};
export default Input;
