'use client'
import React, { useState } from "react";
import s from "./UploadFile.module.scss";

interface UploadFileProps {
  title?: string;
  api?: string; // URL для загрузки
}

export function UploadFile({ title = "Upload a File", api }: UploadFileProps) {
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
      <h1>{title}</h1>
      <input type="file" onChange={handleFileChange} />
      {selectedFile && <p>ok</p>}
      <button onClick={handleUpload} disabled={!selectedFile}>
        Upload
      </button>
    </div>
  );
}
