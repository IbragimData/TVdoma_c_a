"use client";
import InputComponents from "@/components/InputComponents/IndputComponents";
import s from "./CreateGenrePanel.module.scss";
import CustomBlueButtonComponents from "@/components/CustomBlueButtonComponents/CustomBlueButtonComponents";
import { useEffect, useState } from "react";
import CustomRoweBlueButtonComponents from "@/components/CustomRoweBlueButtonComponents/CustomRoweBlueButtonComponents";
import axios from "axios";
import { host, hostMedia } from "@/data";
import { title } from "process";

interface CreateGenrePanelProps {
  setGenrePanel: (e: boolean) => void;
  api?: string;
  contentId?: number;
}

export function CreateGenrePanel({
  setGenrePanel,
  api,
  contentId,
}: CreateGenrePanelProps) {
  const [genreId, setGenreId] = useState<number[]>([]);
  const [genres, setGenres] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState<any>({
    title: "",
    rusTitle: "",
  });

  const handleChange = (field: string, value: string | number) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCreateGenre = async () => {
    try {
      const { data } = await axios.post(hostMedia + "api/genre", formData);
      setGenres((prev) => [...prev, data]);
    } catch (e) {
      console.log(e);
    }
  };

  const handleAddGenre = async () => {
    console.log(genreId);
    try {
      const res = await axios.post(
        hostMedia + "api/content/genre/" + contentId + "/add-multiple",
        {
          genreIds: genreId,
        }
      );
      console.log(res.data);
      location.reload();
    } catch (e) {}
  };

  const handleGetGenres = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(hostMedia + "api/genre");
      setGenres(data);
      console.log(data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetGenres();
  }, []);

  const handleSelect = (id: number) => {
    setGenreId((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };
  return (
    <div className={s.CreateGenrePanel}>
      <h1 className={s.CreateGenrePanel__title}>Жанр</h1>
      <div className={s.CreateGenrePanel__content}>
        <InputComponents
          onChange={(e) => handleChange("title", e.target.value)}
          label="Жанр"
          placeholder="Название жанра "
        />
        <InputComponents
          onChange={(e) => handleChange("rusTitle", e.target.value)}
          label="Жанр на Руссом"
          placeholder="Название жанра на русскрм "
        />
      </div>
      <div className={s.CreateGenrePanel__block}>
        <CustomBlueButtonComponents
          onClick={handleCreateGenre}
          label="Добавить жанр"
        />
      </div>
      <div className={s.CreateGenrePanel__contener}>
        {loading ? (
          <h1>loading...</h1>
        ) : (
          <div className={s.CreateGenrePanel__contener}>
            {genres.map((i, index) => (
              <div
                key={index}
                onClick={() => {
                  handleSelect(i.id);
                }}
                style={{
                  backgroundColor: genreId.includes(i.id)
                    ? "#5e5e5e"
                    : "#383838",
                }}
                className={s.CreateGenrePanel__genre}
              >
                {i.rusTitle}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={s.CreateGenrePanel__block}>
        <div className={s.CreateGenrePanel__box}>
          <CustomRoweBlueButtonComponents
            onClick={() => setGenrePanel(false)}
            label="Отмена"
          />
          <CustomBlueButtonComponents
            onClick={handleAddGenre}
            label="Сохранить"
          />
        </div>
      </div>
    </div>
  );
}
