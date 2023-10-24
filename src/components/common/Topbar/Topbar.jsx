import React from "react";
import { IoMdColorPalette } from "react-icons/io";

export default function Topbar() {
  return (
    <div className="card-title">
      {" "}
      <IoMdColorPalette size={40} color="red"/> Colores{" "}
    </div>
  );
}
