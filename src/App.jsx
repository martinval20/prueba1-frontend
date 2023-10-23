import ColorList from "./components/ColorList";
import "./Sass/ColorListComponent.scss"

function App() {
  
  return (
    <div className="card-main">
      <div className="card-title">Colores</div>
      <ColorList/>
      <div className="mover"><p>Anterior</p> <p>Siguiente</p></div>

    </div>
  );
}

export default App;
