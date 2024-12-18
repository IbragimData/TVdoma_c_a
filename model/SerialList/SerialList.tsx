import s from "./SerialList.module.scss";
import InputComponents from "@/components/InputComponents/IndputComponents";
import { MovieListItem } from "../MovieListItem/MovieListItem";


export function SerialList () {
  return (
<div className={s.SerialList}>
 <div className={s.SerialList__contener}>
    <h1 className={s.SerialList__title}>Название сериала: 1 Сезон</h1>
    <button className={s.SerialList__but__add}>Добавить серию</button>
 </div>
    <div className={s.SerialList__list}>
    <InputComponents  label="Название" placeholder="Название фильма " />
    <MovieListItem/>
    <MovieListItem/>
    </div>
    <div className={s.SerialList__contener}>
    <div className = {s.SerialList__btnContener} >
    <button className={s.SerialList__but__delete}>Удалить</button>
    <button className={s.SerialList__but__cancel}>Отмена</button>
    <button className={s.SerialList__but}>Сохранить</button>
    </div>
    
</div>


</div>
  )
}