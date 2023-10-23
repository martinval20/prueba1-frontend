import React from "react";
import { useEffect, useState } from "react";
import NavButton from "./common/NavButton/NavButton";
import { CopyToClipboard } from "react-copy-to-clipboard";

function ColorList() {
  const [colors, setColors] = useState([]);
  const [page, setPage] = useState(1);
  const [isCopied, setisCopied] = useState(true);
  const [colorColor, setColorColor] = useState("");

  function colorSelected(colors) {
    const colorCopy = colors.color;
    setColorColor(colorCopy);
    setisCopied(!isCopied);
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://reqres.in/api/colors?page=${page}`);
      const data = await response.json();
      setColors(data.data);
    }
    fetchData();
  }, [page]);

  return isCopied ? (
    <div>
      <div className="container">
        {colors.map((colors) => {
          return (
            <CopyToClipboard key={colors.id} text={`${colorColor}`}>
              <div onClick={() => colorSelected(colors)} className="card" style={{ background: `${colors.color}` }}>
                <p className="year" >{colors.year} </p>
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
              <CopyToClipboard key={colors.id} text={colorColor}>
                <div onClick={() => colorSelected(colors)} className="card2" style={{ background: `${colors.color}` }}>
                  <p className="year">{colors.year} </p>
                  <p className="copiado">¡Copiado!</p>
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
