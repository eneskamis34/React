import container from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div>
      <container>
        <Navi />
        <Dashboard />
      </container>
    </div>
  );
}

export default App;
