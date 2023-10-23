import ColorList from "./components/ColorList";
import "./Sass/ColorListComponent.scss";
import Topbar from "./components/common/Topbar/Topbar";
function App() {
  return (
    <div className="card-main">
      <Topbar />
      <ColorList />
    </div>
  );
}

export default App;
