import React from "react";
import s from "./CustomBlueButtonComponents.module.scss"
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

const CustomBlueButtonComponents: React.FC<ButtonProps> = ({
  label,
  ...props
}) => {
  return <button className={s.button} {...props}>{label}</button>;
};

export default CustomBlueButtonComponents;
