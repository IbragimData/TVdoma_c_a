"use client"
import React from 'react';
import s from "./CustomTextareaComponent.module.scss"
interface InputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const CustomTextareaComponent: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className={s.CustomTextareaComponent}>
      {label && <label className={s.CustomTextareaComponent__label}>{label}</label>}
      <textarea {...props} className={s.CustomTextareaComponent__textarea}  />
    </div>
  );
};

export default CustomTextareaComponent;