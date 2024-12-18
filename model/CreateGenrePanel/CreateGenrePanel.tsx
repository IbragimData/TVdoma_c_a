"use client";
import InputComponents from "@/components/InputComponents/IndputComponents";
import s from "./CreateGenrePanel.module.scss";
import CustomBlueButtonComponents from "@/components/CustomBlueButtonComponents/CustomBlueButtonComponents";
import { useState } from "react";
import CustomRoweBlueButtonComponents from "@/components/CustomRoweBlueButtonComponents/CustomRoweBlueButtonComponents";

interface CreateGenrePanelProps {
  setGenrePanel: (e: boolean) => void;
  api?: string;
}

export function CreateGenrePanel({
  setGenrePanel,
  api,
}: CreateGenrePanelProps) {
  const [genreId, setGenreId] = useState<number[]>([]);
  const genre = [
    {
      id: 1,
      title: "fkalsdl",
      titleRu: "kfjasdlkjflkadsj",
    },
    {
      id: 2,
      title: "fkalsdl",
      titleRu: "kfjasdlkjflkadsj",
    },
    {
      id: 3,
      title: "fkalsdl",
      titleRu: "kfjasdlkjflkadsj",
    },
    {
      id: 4,
      title: "fkalsdl",
      titleRu: "kfjasdlkjflkadsj",
    },
    {
      id: 5,
      title: "fkalsdl",
      titleRu: "kfjasdlkjflkadsj",
    },
  ];

  const handleSelect = (id: number) => {
    setGenreId((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };
  return (
    <div className={s.CreateGenrePanel}>
      <h1 className={s.CreateGenrePanel__title}>Жанр</h1>
      <div className={s.CreateGenrePanel__content}>
        <InputComponents label="Жанр" placeholder="Название жанра " />
        <InputComponents
          label="Жанр на Руссом"
          placeholder="Название жанра на русскрм "
        />
      </div>
      <div className={s.CreateGenrePanel__block}>
        <CustomBlueButtonComponents label="Добавить жанр" />
      </div>
      <div className={s.CreateGenrePanel__contener}>
        {genre.map((i, index) => (
          <div
            key={index}
            onClick={() => {
              handleSelect(i.id);
            }}
            style={{
              backgroundColor: genreId.includes(i.id) ? "#5e5e5e" : "#383838",
            }}
            className={s.CreateGenrePanel__genre}
          >
            {i.titleRu}
          </div>
        ))}
      </div>
      <div className={s.CreateGenrePanel__block}>
        <div className={s.CreateGenrePanel__box}>
          <CustomRoweBlueButtonComponents
            onClick={() => setGenrePanel(false)}
            label="Отмена"
          />
          <CustomBlueButtonComponents
            onClick={() => {
              console.log(genreId);
              console.log(api)
            }}
            label="Сохранить"
          />
        </div>
      </div>
    </div>
  );
}
