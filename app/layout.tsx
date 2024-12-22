"use client";
import localFont from "next/font/local";
import "./globals.css";
import { Auth, Header } from "@/model";
import { useEffect, useState } from "react";
import axios from "axios";
import { hostAuth } from "@/data";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState(true);

  const onIsAuth = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        throw new Error("User is not auth");
      }

      const response = await axios.get(hostAuth + "api/auth", {
        headers: {
          Authorization: token,
        },
      });
      console.log(response.data);
      setLoading(false);
      setAuth(false);
    } catch (e) {
      console.log(e);
      setAuth(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    onIsAuth();
  }, []);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {loading ? (
          <h1>loading...</h1>
        ) : (
          <div>{auth ? <Auth /> : <div>{children}</div>}</div>
        )}
      </body>
    </html>
  );
}
