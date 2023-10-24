import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Color({ colors }) {
  const [isCopied, setisCopied] = useState(true);
  const [colorColor, setColorColor] = useState("");

  function colorSelected(props) {
    const colorCopy = props.color;
    setColorColor(colorCopy);
    setisCopied(!isCopied);
    console.log(colorCopy);
    console.log("hola");
  }

  return (
    <CopyToClipboard text={colorColor}>
      <div onClick={() => colorSelected(colors)} className="card">
        <p className="year">{colors.year} </p>
        <p className="colorName">{colors.name}</p>
        <p className="colorCode">{colors.color} </p>
        <p className="colorPatone">{colors.pantone_value}</p>
      </div>
    </CopyToClipboard>
  );
}
