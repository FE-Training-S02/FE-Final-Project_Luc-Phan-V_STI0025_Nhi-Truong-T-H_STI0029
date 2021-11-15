import React from 'react';
interface SelectOption {
  value: string,
  name: string
}
interface SelectProps {
  listOptions: SelectOption[];
  className?: string;
  label?: string;
  ref: any;
  defaultValue: any
}

const Select = ({ listOptions, className, label, ref, defaultValue }: SelectProps) => {
  return (
    <div className="form-group">
      <div className="input-group">
        <select
          className={`form-control ${className}`}
          {...ref}
          defaultValue={defaultValue}
        >
          {
            listOptions.map((item, index) => <option key={index} value={item.value}>{item.name}</option>)
          }
        </select>
        <label className="form-label">{label}</label>
      </div>
    </div>
  );
};
export default Select
