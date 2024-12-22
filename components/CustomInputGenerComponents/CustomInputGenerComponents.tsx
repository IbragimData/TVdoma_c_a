"use client";
import { CreateGenrePanel, UploadFile } from "@/model";
import s from "./CustomInputGenerComponents.module.scss";
import { useState } from "react";

interface InputProps {
  api?: string;
  contentId?: number;
}

const CustomInputGenerComponents = ({ api, contentId }: InputProps) => {
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
        <CreateGenrePanel
          setGenrePanel={setGenrePanel}
          contentId={contentId}
          api={api}
        />
      )}
    </div>
  );
};

export default CustomInputGenerComponents;
