import React from 'react';
interface InputProps {
  type: 'text' | 'select' | 'textarea' | 'submit' | 'email' | 'number' | 'password' | 'date';
  className?: string;
  placeholder?: string;
  onChange?: () => void;
  name?: string;
  value?: string;
  label?: string;
  validate?: any
}

const Input = ({ type, className, placeholder, name, value, label, validate }: InputProps) => {
  return (
    <div className="form-group">
      <div className="input-group">
        <input
          type={type}
          className={className}
          placeholder={placeholder}
          name={name}
          value={value}
          label={label}
          {...validate} />
        <label className="form-label">{label}</label>
        <span className="msg-error"></span>
      </div>
    </div>
  );
};
export default Input;
