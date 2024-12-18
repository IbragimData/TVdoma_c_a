"use client";
import React, { useState } from "react";
import s from "./UploadFile.module.scss";
import CustomRoweBlueButtonComponents from "@/components/CustomRoweBlueButtonComponents/CustomRoweBlueButtonComponents";
import CustomBlueButtonComponents from "@/components/CustomBlueButtonComponents/CustomBlueButtonComponents";

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

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile || !api) return;
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch(api, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("File uploaded successfully!");
      } else {
        alert("Failed to upload file.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className={s.UploadFile}>
      <h1 className={s.UploadFile__title}>{title}</h1>
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
        <CustomBlueButtonComponents
          onClick={() => console.log(api)}
          label="Сохранить"
        />
      </div>
    </div>
  );
}
