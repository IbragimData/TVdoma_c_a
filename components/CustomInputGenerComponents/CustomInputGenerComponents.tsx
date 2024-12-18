"use client";
import { CreateGenrePanel, UploadFile } from "@/model";
import s from "./CustomInputGenerComponents.module.scss";
import { useState } from "react";

interface InputProps {
  api?: string;
}

const CustomInputGenerComponents = ({ api }: InputProps) => {
  const [genrePanel, setGenrePanel] = useState(false);
  return (
    <div className={s.CustomInputFile}>
      <h2 className={s.CustomInputFile__title}>Жанр</h2>
      <div
        onClick={() => setGenrePanel(true)}
        className={s.CustomInputFile__content}
      >
        Жанр
      </div>

      {genrePanel && (
        <CreateGenrePanel setGenrePanel={setGenrePanel} api={api} />
      )}
    </div>
  );
};

export default CustomInputGenerComponents;
