import React from "react";
import s from "./CustomRedButtonComponents.module.scss";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

const CustomRedButtonComponents: React.FC<ButtonProps> = ({
  label,
  ...props
}) => {
  return (
    <button className={s.button} {...props}>
      {label}
    </button>
  );
};

export default CustomRedButtonComponents;
