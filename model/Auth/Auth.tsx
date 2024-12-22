"use client";
import { useState } from "react";
import axios from "axios";
import InputComponents from "@/components/InputComponents/IndputComponents";
import s from "./Auth.module.scss";
import { hostAuth } from "@/data";

export function Auth() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    console.log(hostAuth + "api/auth/login");
    try {
      const response = await axios.post(hostAuth + "api/auth/login", {
        mail,
        password,
      });

      const token = response.data.jwt;
      localStorage.setItem("accessToken", "Bearer " + token);
      location.reload();
    } catch (error) {
      console.log("Error during login:", error);
    }
  };

  return (
    <div className={s.Auth}>
      <h1 className={s.Auth__title}>Auth</h1>
      <div className={s.Auth__content}>
        <InputComponents
          label="mail"
          type="text"
          placeholder="mail"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        <InputComponents
          label="password"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className={s.Auth__but} onClick={handleLogin}>
        Submit
      </button>
    </div>
  );
}
