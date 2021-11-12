import React from "react";
interface PropsInput {
  type: 'text' | 'select' | 'textarea' | 'submit' | 'email' | 'number' | 'password',
  className?: string,
  placeholder?: string,
  onChange?: () => void,
  name?: string,
  value?: string,
  validate?: any
}

const Input = (props: PropsInput) => {
  const { type, className, placeholder, onChange, name, value, validate } = props;
  const handleChange = () => {
    if (onChange) {
      onChange();
    } else return;
  };
  return (
    <input type={type} className={className} placeholder={placeholder} name={name} value={value} onChange={() => handleChange()} {...validate} />
  )
}
export default Input;
