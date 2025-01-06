"use client";
import InputComponents from "@/components/InputComponents/IndputComponents";
import s from "./UpdateMovieFilm.module.scss";
import CustomTextareaComponent from "@/components/CustomTextareaComponent/CustomTextareaComponent";
import CustomBlueButtonComponents from "@/components/CustomBlueButtonComponents/CustomBlueButtonComponents";
import CustomInputFile from "@/components/CustomInputFile/CustomInputFile";
import CustomRoweBlueButtonComponents from "@/components/CustomRoweBlueButtonComponents/CustomRoweBlueButtonComponents";
import CustomRedButtonComponents from "@/components/CustomRedButtonComponents/CustomRedButtonComponents";
import { useEffect, useState } from "react";
import { DeletePanel } from "../DeletePanel/DeletePanel";
import { CreateGenrePanel } from "../CreateGenrePanel";
import CustomInputGenerComponents from "@/components/CustomInputGenerComponents/CustomInputGenerComponents";
import axios from "axios";
import { hostMedia } from "@/data";
export function UpdateMovieFilm({ url }: { url: string }) {
  const handleGetContent = async () => {
    try {
      setLoading(true);
      const res = await axios.get(hostMedia + "api/content/" + url);
      console.log(res.data.description);
      setFormData(res.data);
      setLoading(false);
      setFilm(true);
    } catch (e) {
      console.log(e);
      setLoading(false);
      setFilm(false);
    }
  };

  useEffect(() => {
    handleGetContent();
  }, []);
  const [loading, setLoading] = useState(true);
  const [film, setFilm] = useState(false);
  const [deletePanel, setDeletePanel] = useState(false);
  const [genrePanel, setGenrePanel] = useState(false);
  // Состояние для хранения данных формы
  const [formData, setFormData] = useState({
    id: 1,
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
      console.log(formData);
      const response = await axios.patch(
        hostMedia + "api/content/" + url,
        formData
      );
      console.log(formData);
      console.log("Фильм успешно update:", response.data);
      alert("Фильм успешно update!");
    } catch (error) {
      console.error("Ошибка при добавлении фильма:", error);
      alert("Произошла ошибка при добавлении фильма.");
    }
  };

  return (
    <div className={s.CreateMovie}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {film ? (
            <div>
              <h1 className={s.CreateMovie__title}>Добавить фильм</h1>
              <div className={s.CreateMovie__content}>
                <div className={s.CreateMovie__block}>
                  <InputComponents
                    label="Название"
                    value={formData.title}
                    onChange={(e) => handleChange("title", e.target.value)}
                  />
                  <InputComponents
                    label="URL для фильма"
                    value={formData.url}
                    onChange={(e) => handleChange("url", e.target.value)}
                  />
                  <InputComponents
                    label="Ограничение по возрасту"
                    value={formData.ageLimit}
                    onChange={(e) =>
                      handleChange("ageLimit", Number(e.target.value))
                    }
                  />
                  <InputComponents
                    label="Продолжительность фильма"
                    value={formData.duration}
                    onChange={(e) =>
                      handleChange("duration", Number(e.target.value))
                    }
                  />
                  <InputComponents
                    label="Основной жанр"
                    value={formData.mainGenre}
                    onChange={(e) =>
                      handleChange("mainGenre", e.target.value)
                    }
                  />
                  <CustomTextareaComponent
                    label="Короткое Описание"
                    value={formData.shortDescription}
                    onChange={(e) =>
                      handleChange("shortDescription", e.target.value)
                    }
                  />
                  <CustomInputFile
                    title="Фильм"
                    api={hostMedia + "api/content/" + formData.id + "/media"}
                  />
                  <CustomInputFile
                    title="Баннер"
                    api={hostMedia + "api/content/" + formData.id + "/banner"}
                  />
                  <CustomInputFile
                    title="Название в фирменном стиле"
                    api={
                      hostMedia + "api/content/" + formData.id + "/title-image"
                    }
                  />
                </div>
                <div className={s.CreateMovie__block}>
                  <InputComponents
                    label="Оригинальное Название"
                    value={formData.originalTitle}
                    onChange={(e) =>
                      handleChange("originalTitle", e.target.value)
                    }
                  />
                  <InputComponents
                    label="Страна"
                    value={formData.country}
                    onChange={(e) => handleChange("country", e.target.value)}
                  />
                  <InputComponents
                    label="Год выпуска"
                    value={formData.releaseDate}
                    onChange={(e) =>
                      handleChange("releaseDate", Number(e.target.value))
                    }
                  />
                  <InputComponents
                    label="Продолжительность трейлера"
                    value={formData.trailerDuration}
                    onChange={(e) =>
                      handleChange("trailerDuration", Number(e.target.value))
                    }
                  />
                  <CustomTextareaComponent
                    label="Описание"
                    value={formData.description}
                    onChange={(e) =>
                      handleChange("description", e.target.value)
                    }
                  />
                  <CustomInputFile
                    title="Постер"
                    api={hostMedia + "api/content/" + formData.id + "/poster"}
                  />
                  <CustomInputFile
                    title="Трейлер"
                    api={hostMedia + "api/content/" + formData.id + "/trailer"}
                  />
                  <CustomInputGenerComponents api="" contentId={formData.id} />
                </div>
              </div>
              {genrePanel && <CreateGenrePanel setGenrePanel={setGenrePanel} />}
              {deletePanel && (
                <DeletePanel
                  title="Удалить"
                  descriptions="Вы действительно хотите удалить данный контент "
                  setDeletePanel={setDeletePanel}
                  api={hostMedia + "api/content/" + url}
                />
              )}
              <div className={s.CreateMovie__but}>
                <CustomRedButtonComponents
                  onClick={() => setDeletePanel(true)}
                  label="Удалить"
                />
                <CustomRoweBlueButtonComponents label="Отмена" />
                <CustomBlueButtonComponents
                  onClick={handleSubmit}
                  label="Сохранить"
                />
              </div>
            </div>
          ) : (
            <h1>404</h1>
          )}
        </div>
      )}
    </div>
  );
}
