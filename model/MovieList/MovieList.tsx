import { MovieListItem } from "../MovieListItem/MovieListItem";
import s from "./MovieList.module.scss";

export function MovieList() {
  return (
    <div className={s.MovieList}>
      <div className={s.MovieList__contener}>
        <form className={s.form}>
            <div className={s.form__content}>
                <img className={s.form__img} src="/images/svg/icon/search.svg" alt="" />
                <input placeholder="Название фильма или сериала" className={s.form__input} type="text" />
            </div>
            <button className={s.form__but}>Найти</button>
        </form>
        <button className={s.MovieList__but}>Добавить фильм</button>
        <button className={s.MovieList__but}>Добавить сериал</button>
      </div>
      <div className={s.MovieList__list}>
        <MovieListItem />
        <MovieListItem />
        <MovieListItem />
      </div>
    </div>
  );
}
