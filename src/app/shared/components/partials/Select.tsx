import React from 'react';
interface SelectOption {
  value: string,
  name: string
}
interface SelectProps {
  listOptions: SelectOption[];
  className?: string;
  label?: string;
}

const Select = ({ listOptions, className, label }: SelectProps) => {
  return (
    <div className="form-group">
      <div className="input-group">
        <select
          className={className}
        >
          {
            listOptions.map((item) => <option value={item.value}>{item.name}</option>)
          }
        </select>
        <label className="form-label">{label}</label>
        <span className="msg-error"></span>
      </div>
    </div>
  );
};
export default Select
