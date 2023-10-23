import React from "react";
import { useEffect, useState } from "react";
import Color from "./Color";
import Loader from "./common/Loader/Loader";

function NavPage(props) {
  return (
    <div className="btn-nav">
      <button className="btn-atras" disabled={props.page==1} onClick={() => props.setPage(1)}>
        {" "}
        &lt; Anterior
      </button>
      <button className="btn-siguiente" disabled={props.page==2} onClick={() => props.setPage(2)}>
        Siguiente &gt;
      </button>
    </div>
  );
}
function ColorList() {
  const [colors, setColors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://reqres.in/api/colors?page=${page}`);
      const data = await response.json();
      setLoading(false);
      setColors(data.data);
    }
    fetchData();
  }, [page]);

  return loading ? (
    <Loader />
  ) : (
    <div>
      <div className="container">
        {colors.map((colors) => {
          return <Color key={colors.id} colors={colors} />;
        })}
      </div>
      <NavPage page={page} setPage={setPage}/>
    </div>
  );
}

export default ColorList;
