"use client";

import { useState } from "react";
import axios from "axios";
import InputComponents from "@/components/InputComponents/IndputComponents";
import CustomTextareaComponent from "@/components/CustomTextareaComponent/CustomTextareaComponent";
import CustomBlueButtonComponents from "@/components/CustomBlueButtonComponents/CustomBlueButtonComponents";
import s from "./CreateMovieFilm.module.scss";
import { hostMedia } from "@/data";

export function CreateMovieFilm() {
  // Состояние для хранения данных формы
  const [formData, setFormData] = useState({
    title: "",
    originalTitle: "",
    description: "",
    shortDescription: "",
    ageLimit: 0,
    country: "",
    duration: 0,
    trailerDuration: 0,
    releaseDate: 0,
    url: "",
    type: "FILM", // Укажите значение по умолчанию для ContentType
    mainGenre: "",
  });

  // Функция для обработки изменения значений в форме
  const handleChange = (field: string, value: string | number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Функция для отправки данных на сервер
  const handleSubmit = async () => {
    try {
      const response = await axios.post(hostMedia + "api/content", formData);
      console.log("Фильм успешно добавлен:", response.data);
      alert("Фильм успешно добавлен!");
      location.replace("/film/" + formData.url);
    } catch (error) {
      console.error("Ошибка при добавлении фильма:", error);
      alert("Произошла ошибка при добавлении фильма.");
    }
  };

  return (
    <div className={s.CreateMovie}>
      <h1 className={s.CreateMovie__title}>Добавить фильм</h1>
      <div className={s.CreateMovie__content}>
        <div className={s.CreateMovie__block}>
          <InputComponents
            label="Название"
            onChange={(e) => handleChange("title", e.target.value)}
          />
          <InputComponents
            label="URL для фильма"
            onChange={(e) => handleChange("url", e.target.value)}
          />
          <InputComponents
            label="Ограничение по возрасту"
            onChange={(e) => handleChange("ageLimit", Number(e.target.value))}
          />
          <InputComponents
            label="Продолжительность фильма"
            onChange={(e) => handleChange("duration", Number(e.target.value))}
          />

          <InputComponents
            label="Основной жанр"
            value={formData.mainGenre}
            onChange={(e) => handleChange("mainGenre", e.target.value)}
          />
          <CustomTextareaComponent
            label="Короткое Описание"
            onChange={(e) => handleChange("shortDescription", e.target.value)}
          />
        </div>
        <div className={s.CreateMovie__block}>
          <InputComponents
            label="Оригинальное Название"
            onChange={(e) => handleChange("originalTitle", e.target.value)}
          />
          <InputComponents
            label="Страна"
            onChange={(e) => handleChange("country", e.target.value)}
          />
          <InputComponents
            label="Год выпуска"
            onChange={(e) =>
              handleChange("releaseDate", Number(e.target.value))
            }
          />
          <InputComponents
            label="Продолжительность трейлера"
            onChange={(e) =>
              handleChange("trailerDuration", Number(e.target.value))
            }
          />
          <CustomTextareaComponent
            label="Описание"
            onChange={(e) => handleChange("description", e.target.value)}
          />
        </div>
      </div>
      <div className={s.CreateMovie__but}>
        <CustomBlueButtonComponents label="Сохранить" onClick={handleSubmit} />
      </div>
    </div>
  );
}
