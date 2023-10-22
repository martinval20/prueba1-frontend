import React from "react";
import { useEffect, useState } from "react";
import Color from "./Color";

function ColorList() {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://reqres.in/api/colors");
      const data = await response.json();
      setColors(data.data);
    }
    fetchData();
  }, []);
  return (
    <div className="container">
      {colors.map((colors) => {
        return (
          <Color key={colors.id} colors={colors}/>
        );
      })}
    </div>
  );
}

export default ColorList;