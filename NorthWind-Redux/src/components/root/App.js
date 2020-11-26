import container from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import {Route, Switch} from "react-router-dom"
import cartDetail from "../categories/cart/cartDetail";
function App() {
  return (
    <div>
      <container>
        <Navi />
        <Switch>
          <Route path="/" exact component={Dashboard}/>
          <Route path="/product" exact component={Dashboard}/>
          <Route path="/cart" exact component={cartDetail}/>
          </Switch>
      </container>
    </div>
  );
}

export default App;
