import React from "react";
import { useEffect, useState } from "react";
import Color from "./Color";
import Loader from "./common/Loader/Loader";

function ColorList() {
  const [colors, setColors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://reqres.in/api/colors");
      const data = await response.json();
      setLoading(false);
      setColors(data.data);
    }
    fetchData();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className="container">
      {colors.map((colors) => {
        return <Color key={colors.id} colors={colors} />;
      })}
    </div>
  );
}

export default ColorList;
