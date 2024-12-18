import s from "./SerialSeries.module.scss";
import InputComponents from "@/components/InputComponents/IndputComponents";
import CustomInputFile from "@/components/CustomInputFile/CustomInputFile";



export function SerialSeries () {
  return (
<div className={s.SerialSeries}>
 <div className={s.SerialSeries__contener}>
    <h1 className={s.SerialSeries__title}>Название сериала: 1 Сезон</h1>
 </div>
    <div className={s.SerialSeries__list}>
    <div className={s.SerialSeries__list__item}>
    <InputComponents  label="Название" placeholder="Название фильма" />
    <InputComponents  label="Год выпуска" placeholder="Год" />
    <CustomInputFile/>
    </div>
    <div className={s.SerialSeries__list__item}>
    <InputComponents  label="Страна" placeholder="Страна" />
    <InputComponents  label="Продолжительность трейлера " placeholder="Продолжительность трейлера" />
    </div>
    </div>
    <div className={s.SerialSeries__contener}>
    <div className = {s.SerialSeries__btnContener} >
    <button className={s.SerialSeries__but__delete}>Удалить</button>
    <button className={s.SerialSeries__but__cancel}>Отмена</button>
    <button className={s.SerialSeries__but}>Сохранить</button>
    </div>
    
</div>


</div>
  )
}
