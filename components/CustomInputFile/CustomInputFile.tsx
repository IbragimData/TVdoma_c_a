import { UploadFile } from "@/model";
import s from "./CustomInputFile.module.scss"

interface InputProps {
  title?: string;
  api?: string;
}

const CustomInputFile = ({ title, api }: InputProps) => {
  return <div className={s.CustomInputFile}>
    <h2 className={s.CustomInputFile__title}>{title}</h2>
    <div className={s.CustomInputFile__content}>
        <p className={s.CustomInputFile__text}>Загрузить файл</p>
        <img className={s.CustomInputFile__image} src="/images/svg/icon/file.svg" alt="" />
    </div>
    <UploadFile />
  </div>;
};


export default CustomInputFile