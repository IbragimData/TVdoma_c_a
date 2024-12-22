import Link from "next/link";
import s from "./MovieListItem.module.scss";
import { host, hostMedia } from "@/data";

interface MovieProps {
  url: string;
  title: string;
  description: string;
  banner?: string;
}

export function MovieListItem({ url, title, description, banner }: MovieProps) {
  return (
    <Link href={"/film/" + url} className={s.Item}>
      <div className={s.Item__image}>
        {banner && (
          <img
            className={s.Item__image}
            src={hostMedia + "api/banner/" + banner}
            alt=""
          />
        )}
      </div>
      <div className={s.Item__info}>
        <h3 className={s.Item__title}>{title}</h3>
        <p className={s.Item__text}>{description}</p>
      </div>
    </Link>
  );
}
