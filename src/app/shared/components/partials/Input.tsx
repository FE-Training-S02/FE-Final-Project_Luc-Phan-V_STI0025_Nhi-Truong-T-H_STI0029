import React from 'react';
interface InputProps {
  type: 'text' | 'select' | 'textarea' | 'submit' | 'email' | 'number' | 'password' | 'date' | 'file';
  className?: string;
  placeholder?: string;
  onChange?: () => {};
  name?: string;
  value?: string;
  errors?: any;
  label?: string;
  accept?: any;
  register?: any
}

const Input = ({ type, className, placeholder, name, value, errors, label, register, accept }: InputProps) => {
  return (
    <div className="form-group">
      <div className="input-group">
        <input
          type={type}
          className={`form-control ${className}`}
          placeholder={placeholder}
          name={name}
          value={value}
          accept={accept}
          {...register}
        />
        <label className="form-label">{label}</label>
        {errors && <span className="msg-error">{errors.message}</span>}
      </div>
    </div>
  );
};
export default Input;
