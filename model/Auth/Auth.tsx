import InputComponents from "@/components/InputComponents/IndputComponents";
import s from "./Auth.module.scss"

export function Auth() {
  return (
    <div className={s.Auth}>
      <h1 className={s.Auth__title}>Auth</h1>
      <div className={s.Auth__content}>
        <InputComponents label="mail" type="text" placeholder="mail" />
        <InputComponents
          label="password"
          type="password"
          placeholder="password"
        />
      </div>
      <button className={s.Auth__but}>submit</button>
    </div>
  );
}
