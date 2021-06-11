import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Teams from "./pages/Teams";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Teams />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
