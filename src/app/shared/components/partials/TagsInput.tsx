import React, { useState } from 'react';
interface TagsInputProps {
  type: 'text';
  className?: string;
  placeholder?: string;
  onChange?: () => {};
  name?: string;
  value?: string[];
  errors?: any;
  register?: any;
}

const TagsInput = ({ type, className, placeholder, name, value, errors, register }: TagsInputProps) => {
  const [tagData, setTagData] = useState<any>([]);
  const handleAddTag = (event) => {
    if (event.key === 'Enter' && event.target.value !== '') {
      setTagData([...tagData, event.target.value]);
      event.target.value = '';
    }
  }
  const handleRemoveTagData = (indexRemove) => {
    setTagData([...tagData].filter((tag, index) => index !== indexRemove));
  }
  return (
    <>
      <div className="tag-input">
        <ul className="list-tags">
          {tagData.map((tag, index) => (
            <li key={index} className="item-tag">
              <span className="title-tag">{tag}</span>
              <span className="tag-close-icon" onClick={() => handleRemoveTagData(index)}>x</span>
            </li>
          ))}
        </ul>
        <input
          type={type}
          className={className}
          placeholder={placeholder}
          name={name}
          value={tagData}
          {...register}
          onKeyUp={handleAddTag}
        />
      </div>
      {errors && <span className="msg-error">{errors.message}</span>}
    </>
  );
};
export default TagsInput;
