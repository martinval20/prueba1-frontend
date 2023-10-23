import ColorList from "./components/ColorList";
import "./Sass/ColorListComponent.scss"

function App() {
  
  return (
    <div className="card-main">
      <div className="card-title">Colores</div>
      <ColorList/>
      <div className="btn-nav">
        <button className="btn-atras"> &lt; Anterior</button>
        <button className="btn-siguiente">Siguiente &gt;</button>
      </div>

    </div>
  );
}

export default App;
