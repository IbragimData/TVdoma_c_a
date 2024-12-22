"use client";
import Link from "next/link";
import { MovieListItem } from "../MovieListItem/MovieListItem";
import s from "./MovieList.module.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { hostMedia } from "@/data";

export function MovieList() {
  const [movies, setMovies] = useState([]);

  // Функция для получения списка фильмов
  const fetchMovies = async () => {
    try {
      const res = await axios.get(`${hostMedia}api/content`);
      setMovies(res.data.movies); // Предполагаем, что `movies` — это массив
    } catch (e) {
      console.error("Ошибка при загрузке фильмов:", e);
    }
  };

  // Загрузка фильмов при монтировании компонента
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className={s.MovieList}>
      <div className={s.MovieList__contener}>
        <form className={s.form}>
          <div className={s.form__content}>
            <img
              className={s.form__img}
              src="/images/svg/icon/search.svg"
              alt="Иконка поиска"
            />
            <input
              placeholder="Название фильма или сериала"
              className={s.form__input}
              type="text"
            />
          </div>
          <button className={s.form__but} type="submit">
            Найти
          </button>
        </form>
        <Link href="/film" className={s.MovieList__but}>
          Добавить фильм
        </Link>
        <button className={s.MovieList__but}>Добавить сериал</button>
      </div>
      <div className={s.MovieList__list}>
        {movies.length > 0 ? (
          movies.map((movie: any) => (
            <MovieListItem
              url={movie.url}
              key={movie.id}
              title={movie.title}
              banner={movie.banner}
              description={movie.shortDescription}
            />
          ))
        ) : (
          <p>Нет доступных фильмов</p>
        )}
      </div>
    </div>
  );
}
