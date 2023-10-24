import React from "react";
import { useEffect, useState } from "react";
import NavButton from "./common/NavButton/NavButton";
import { CopyToClipboard } from "react-copy-to-clipboard";

function ColorList() {
  const [colors, setColors] = useState([]);
  const [page, setPage] = useState(1);
  const [copied, setCopied] = useState(true);
  const [colorColor, setColorColor] = useState();

  function copiado() {
    setCopied(!copied);
  }
  async function colorSelected(colors) {
    const colorCopied = colors.color;
    setColorColor(colorCopied);
    copiado();
    console.log(colorCopied);
  }
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://reqres.in/api/colors?page=${page}`);
      const data = await response.json();
      setColors(data.data);
    }
    fetchData();
  }, [page]);

  return copied ? (
    <div>
      <div className="container">
        {colors.map((colors) => {
          return (
            <CopyToClipboard key={colors.id} text={colors.color}>
              <div
                onClick={() => colorSelected(colors)}
                className="card"
                style={{ background: `${colors.color}` }}
              >
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
              <CopyToClipboard key={colors.id} text={colorColor}>
                <div
                  onClick={() => copiado()}
                  className="card2"
                  style={{ background: `${colors.color}` }}
                >
                  <p className="year">{colors.year} </p>
                  <p className="copiado">¡Copiado!</p>
                  <p className="colorPatone">{colors.pantone_value}</p>
                </div>
              </CopyToClipboard>
            );
          })}
      </div>
    </div>
  );
}

export default ColorList;
