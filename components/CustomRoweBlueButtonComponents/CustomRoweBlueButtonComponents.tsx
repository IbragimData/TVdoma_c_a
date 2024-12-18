import React from "react";
import s from "./CustomRoweBlueButtonComponents.module.scss";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

const CustomRoweBlueButtonComponents: React.FC<ButtonProps> = ({
  label,
  ...props
}) => {
  return (
    <button className={s.button} {...props}>
      {label}
    </button>
  );
};

export default CustomRoweBlueButtonComponents;
