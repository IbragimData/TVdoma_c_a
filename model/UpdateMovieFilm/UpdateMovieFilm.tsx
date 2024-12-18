"use client";
import InputComponents from "@/components/InputComponents/IndputComponents";
import s from "./UpdateMovieFilm.module.scss";
import CustomTextareaComponent from "@/components/CustomTextareaComponent/CustomTextareaComponent";
import CustomBlueButtonComponents from "@/components/CustomBlueButtonComponents/CustomBlueButtonComponents";
import CustomInputFile from "@/components/CustomInputFile/CustomInputFile";
import CustomRoweBlueButtonComponents from "@/components/CustomRoweBlueButtonComponents/CustomRoweBlueButtonComponents";
import CustomRedButtonComponents from "@/components/CustomRedButtonComponents/CustomRedButtonComponents";
import { useState } from "react";
import { DeletePanel } from "../DeletePanel/DeletePanel";
import { CreateGenrePanel } from "../CreateGenrePanel";
import CustomInputGenerComponents from "@/components/CustomInputGenerComponents/CustomInputGenerComponents";
export function UpdateMovieFilm() {
  const [deletePanel, setDeletePanel] = useState(false);
  const [genrePanel, setGenrePanel] = useState(false);

  return (
    <div className={s.CreateMovie}>
      <h1 className={s.CreateMovie__title}>Добавить фильм</h1>
      <div className={s.CreateMovie__content}>
        <div className={s.CreateMovie__block}>
          <InputComponents label="Название" />
          <InputComponents label="url для фильма" />
          <InputComponents label="Ограничение по возрасту" />
          <InputComponents label="Продолжительность фильма " />
          <CustomTextareaComponent label="Короткое Описание" />
          <CustomInputFile title="Фильм" api="/film" />
          <CustomInputFile title="Баннер" api="banner" />
          <CustomInputFile title="Название в фирменном стиле" api="/title" />
        </div>
        <div className={s.CreateMovie__block}>
          <InputComponents label="Оригинальное Название" />
          <InputComponents label="Страна" />
          <InputComponents label="Год выпуска" />
          <InputComponents label="Продолжительность трейлера " />
          <CustomTextareaComponent label="Описание" />
          <CustomInputFile title="Постер" api="poster" />
          <CustomInputFile title="Трейлер" api="trailer" />
          <CustomInputGenerComponents api="api/ibragim" />
        </div>
      </div>
      {genrePanel && <CreateGenrePanel setGenrePanel={setGenrePanel} />}
      {deletePanel && (
        <DeletePanel
          title="Удалить"
          descriptions="Вы действительно хотите удалить данный контент "
          setDeletePanel={setDeletePanel}
          api="/delete-content"
        />
      )}
      <div className={s.CreateMovie__but}>
        <CustomRedButtonComponents
          onClick={() => setDeletePanel(true)}
          label="Удалить"
        />
        <CustomRoweBlueButtonComponents label="Отмена" />
        <CustomBlueButtonComponents label="Сохранить" />
      </div>
    </div>
  );
}
