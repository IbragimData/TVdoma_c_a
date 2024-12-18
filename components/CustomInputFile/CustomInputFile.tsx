"use client";
import { UploadFile } from "@/model";
import s from "./CustomInputFile.module.scss";
import { useState } from "react";

interface InputProps {
  title?: string;
  api?: string;
}

const CustomInputFile = ({ title, api }: InputProps) => {
  const [upload, setUpload] = useState(false);
  return (
    <div className={s.CustomInputFile}>
      <h2 className={s.CustomInputFile__title}>{title}</h2>
      <div
        onClick={() => setUpload(true)}
        className={s.CustomInputFile__content}
      >
        <p className={s.CustomInputFile__text}>Загрузить файл</p>
        <img
          className={s.CustomInputFile__image}
          src="/images/svg/icon/file.svg"
          alt=""
        />
      </div>

      {upload && (
        <UploadFile setUpload={setUpload} title={title} api={"id/" + api} />
      )}
    </div>
  );
};

export default CustomInputFile;
