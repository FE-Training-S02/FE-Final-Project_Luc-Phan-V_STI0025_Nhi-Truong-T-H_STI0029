import React from "react";
interface PropsInput {
  type: 'text' | 'select' | 'textarea' | 'submit' | 'email' | 'number' | 'password' | 'date',
  className?: string,
  placeholder?: string,
  name?: string,
  value?: string,
  validate?: any
}

const Input = (props: PropsInput) => {
  const { type, className, placeholder, name, value, validate } = props;

  return (
    <input type={type} className={className} placeholder={placeholder} name={name} value={value} {...validate} />
  )
}
export default Input;
