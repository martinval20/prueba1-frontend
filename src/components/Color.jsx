import React from "react";

export default function Color({colors}) {
  return (
    <div className="card">
      {colors.year} {colors.name} {colors.color} {colors.pantone_value}
    </div>
  );
}