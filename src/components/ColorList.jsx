import React from "react";
import { useEffect, useState } from "react";
import Loader from "./common/Loader/Loader";
import NavButton from "./common/NavButton/NavButton";
import { CopyToClipboard } from "react-copy-to-clipboard";

function ColorList() {
  const [colors, setColors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [isCopied, setisCopied] = useState(false);
  const [colorColor, setColorColor] = useState("");

  function colorSelected(colors) {
    const colorCopy = colors.color;
    setColorColor(colorCopy);
    setisCopied(!isCopied);
    console.log(colorCopy);
    console.log("hola");
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://reqres.in/api/colors?page=${page}`);
      const data = await response.json();
      setLoading(false);
      setColors(data.data);
    }
    fetchData();
  }, [page]);

  return isCopied ? (
    <div>
      <div className="container">
        {colors
          .map((colors) => {
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
          })}
      </div>
      <NavButton page={page} setPage={setPage} />
    </div>
  ) : (
    <div>
      <div className="container">
        {colors
          .filter((colors) => colors.color === `${colorColor}`)
          .map((colors) => {
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
          })}
      </div>
      <NavButton page={page} setPage={setPage} />
    </div>
  );
}

export default ColorList;
