import ColorList from "./components/ColorList";
import "./Sass/ColorListComponent.scss"

function App() {
  
  return (
    <div >
      <h1 className="card-title">Colores</h1>
      <ColorList/>
<p>Anterior</p> <p>Siguiente</p>
    </div>
  );
}

export default App;
