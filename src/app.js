import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Help } from "./pages";


export function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/help">
            <Help />
          </Route>
        </Switch>
      </Router>
    </>
  );

}


