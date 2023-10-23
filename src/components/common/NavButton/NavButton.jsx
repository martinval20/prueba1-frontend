import React from "react";

export default function NavButton(props) {
  return (
    <div className="btn-nav">
      <button
        className="btn-atras"
        disabled={props.page == 1}
        onClick={() => props.setPage(1)}
      >
        {" "}
        &lt; Anterior
      </button>
      <button
        className="btn-siguiente"
        disabled={props.page == 2}
        onClick={() => props.setPage(2)}
      >
        Siguiente &gt;
      </button>
    </div>
  );
}
