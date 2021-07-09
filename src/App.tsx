import logo from "./logo.svg";
import "./App.css";
import { useDispatch } from "react-redux";
import { clearDrinks } from "./actions";
import AddVessel from "./addVessel";
import DrinkDisp from "./drinkDisp";
import VesselDisp from "./vesselDisp";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DrinkDisp />
        <div>
          Did you know you can drink anything out of anything?
          <VesselDisp />
        </div>
        <div>
          <h3>More actions:</h3>
          <button onClick={() => dispatch(clearDrinks())}>
            Nuke Vessel Contents
          </button>
          <AddVessel />
        </div>
      </header>
    </div>
  );
}

export default App;
