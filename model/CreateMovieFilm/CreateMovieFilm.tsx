import InputComponents from "@/components/InputComponents/IndputComponents";
import s from "./CreateMovieFilm.module.scss";
import CustomTextareaComponent from "@/components/CustomTextareaComponent/CustomTextareaComponent";
import CustomBlueButtonComponents from "@/components/CustomBlueButtonComponents/CustomBlueButtonComponents";
export function CreateMovieFilm() {
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
        </div>
        <div className={s.CreateMovie__block}>
          <InputComponents label="Оригинальное Название" />
          <InputComponents label="Страна" />
          <InputComponents label="Год выпуска" />
          <InputComponents label="Продолжительность трейлера " />
          <CustomTextareaComponent label="Описание" />
        </div>
      </div>
      <div className={s.CreateMovie__but}>
        <CustomBlueButtonComponents label="Сохранить" />
      </div>
    </div>
  );
}