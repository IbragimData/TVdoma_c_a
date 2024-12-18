import s from "./Serial.module.scss";
import InputComponents from "@/components/InputComponents/IndputComponents";

export function Serial () {
  return (
<div className={s.Serial}>

    <h1 className={s.Serial__title}>Название сериала: 1 Сезон</h1>
    <button className={s.Serial__but__add}>Добавить серию</button>
    <div className={s.Serial__input}>
    <InputComponents  label="Название" placeholder="Название фильма " />
    </div>
    <div className = {s.Serial__btnContener} >
    <button className={s.Serial__but__cancel}>Отмена</button>
    <button className={s.Serial__but}>Сохранить</button>
    </div>



</div>
  )
}
