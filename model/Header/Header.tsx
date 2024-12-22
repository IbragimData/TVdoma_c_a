"use client";
import Link from "next/link";
import s from "./Header.module.scss";

export function Header() {

  return (
    <header className={s.header}>
      <div className={s.header__content}> 
        <h1 className={s.header__logo}>Admin</h1>
        <Link className={s.header__link} href="/">Home</Link>
      </div>
    </header>
  );
}
