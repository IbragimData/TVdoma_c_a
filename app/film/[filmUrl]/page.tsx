"use client";
import { UpdateMovieFilm } from "@/model";
import React from "react";

export default function Page({
  params,
}: {
  params: Promise<{ filmUrl: string }>;
}) {
  const { filmUrl } = React.use(params);

  return (
    <div>
      <UpdateMovieFilm url={filmUrl} />
    </div>
  );
}
