"use client"
import React from 'react';
import s from "./IndputComponents.module.scss"
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const InputComponents: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className={s.InputComponents}>
      {label && <label className={s.InputComponents__label}>{label}</label>}
      <input className={s.InputComponents__input} {...props} />
    </div>
  );
};

export default InputComponents;