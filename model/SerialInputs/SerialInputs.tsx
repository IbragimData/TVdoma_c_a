import s from "./SerialInputs.module.scss";
import InputComponents from "@/components/InputComponents/IndputComponents";



export function SerialInputs () {
  return (
<div className={s.SerialInputs}>
 <div className={s.SerialInputs__contener}>
    <h1 className={s.SerialInputs__title}>Название сериала: 1 Сезон</h1>
 </div>
    <div className={s.SerialInputs__list}>
    <div className={s.SerialInputs__list__item}>
    <InputComponents  label="Название" placeholder="Название фильма " />
    <InputComponents  label="Год выпуска" placeholder="Год " />
    </div>
    <div className={s.SerialInputs__list__item}>
    <InputComponents  label="Страна" placeholder="Страна " />
    <InputComponents  label="Продолжительность трейлера " placeholder="Продолжительность трейлера  " />
    </div>
    </div>
    <div className={s.SerialInputs__contener}>
    <div className = {s.SerialInputs__btnContener} >
    <button className={s.SerialInputs__but__cancel}>Отмена</button>
    <button className={s.SerialInputs__but}>Сохранить</button>
    </div>
    
</div>


</div>
  )
}