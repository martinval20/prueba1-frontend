import React from "react";

export default function Color({ colors }) {
  return (
    <div className="card">
      <p className="year">{colors.year} </p>
      <p className="colorName">{colors.name}</p>
      <p className="colorCode">{colors.color} </p>
      <p className="colorPatone">{colors.pantone_value}</p>
    </div>
  );
}
