import CustomRedButtonComponents from "@/components/CustomRedButtonComponents/CustomRedButtonComponents";
import s from "./DeletePanel.module.scss";
import CustomBlueButtonComponents from "@/components/CustomBlueButtonComponents/CustomBlueButtonComponents";
import axios from "axios";
interface DeletePanelProps {
  title?: string;
  descriptions?: string;
  setDeletePanel: (e: boolean) => void;
  api: string;
}

export function DeletePanel({
  title,
  descriptions,
  setDeletePanel,
  api,
}: DeletePanelProps) {
  const handleDelete = async () => {
    try {
      await axios.delete(api);
      location.replace("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={s.DeletePanel}>
      <h1 className={s.DeletePanel__title}>{title}</h1>

      <p className={s.DeletePanel__text}>{descriptions}</p>
      <div className={s.DeletePanel__but}>
        <CustomBlueButtonComponents
          onClick={() => setDeletePanel(false)}
          label="Отмена"
        />
        <CustomRedButtonComponents onClick={handleDelete} label="удалить" />
      </div>
    </div>
  );
}
