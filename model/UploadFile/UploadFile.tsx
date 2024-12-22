"use client";
import React, { useState } from "react";
import s from "./UploadFile.module.scss";
import CustomRoweBlueButtonComponents from "@/components/CustomRoweBlueButtonComponents/CustomRoweBlueButtonComponents";
import CustomBlueButtonComponents from "@/components/CustomBlueButtonComponents/CustomBlueButtonComponents";
import axios from "axios";

interface UploadFileProps {
  title?: string;
  api?: string; // URL для загрузки
  setUpload: (e: boolean) => void;
}

export function UploadFile({
  title = "Upload a File",
  api,
  setUpload,
}: UploadFileProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };
  const handleUpload = async () => {
    if (!selectedFile || !api) return;

    const formData = new FormData();
    formData.append("file", selectedFile);
    setLoading(true);

    try {
      const response = await axios.post(api, formData, {
        timeout: 300000, // Тайм-аут через 5 минут (300000 миллисекунд)
      });
      console.log(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
      console.error("Error uploading file:", error);
      setLoading(false);
    }
  };

  return (
    <div className={s.UploadFile}>
      <h1 className={s.UploadFile__title}>{title}</h1>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <label className={s.UploadFile__content} htmlFor="uploadFile">
          <p className={s.UploadFile__text}>Загрузить файл </p>
          {selectedFile ? (
            <img
              className={s.UploadFile__image}
              src="/images/svg/icon/file_activ.svg"
              alt=""
            />
          ) : (
            <img
              className={s.UploadFile__image}
              src="/images/svg/icon/file.svg"
            />
          )}
        </label>
      )}
      <input
        style={{ display: "none" }}
        onChange={handleFileChange}
        type="file"
        id="uploadFile"
      />
      <div className={s.UploadFile__but}>
        <CustomRoweBlueButtonComponents
          onClick={() => setUpload(false)}
          label="Отмена"
        />
        <CustomBlueButtonComponents onClick={handleUpload} label="Сохранить" />
      </div>
    </div>
  );
}
