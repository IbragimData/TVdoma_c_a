import Link from "next/link";
import s from "./MovieListItem.module.scss";

export function MovieListItem() {
  return (
    <Link href={"/film/ibragim"} className={s.Item}>
      <div className={s.Item__image}>
      </div>
      <div className={s.Item__info}>
        <h3 className={s.Item__title}>Название фильма или сериаласериаласериа ласериала</h3>
        <p className={s.Item__text}>url фильма или сериалаurl фильма или сериалаurl фильма или сериалаurl фильма или сериала url фильма или сериалаurl фильма или сериалаurl фильма или сериалаurl фильма или сериала</p>
      </div>
    </Link>
  );
}
