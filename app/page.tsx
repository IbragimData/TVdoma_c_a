import CustomTextareaComponent from "@/components/CustomTextareaComponent/CustomTextareaComponent";
import InputComponents from "@/components/InputComponents/IndputComponents";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <h1>Ibragim</h1>
      <InputComponents
        placeholder="Название фильма "
        label="ibragim"
        type="text"
      />
      <CustomTextareaComponent label="ibragim" placeholder="ibragim" />
    </div>
  );
}
