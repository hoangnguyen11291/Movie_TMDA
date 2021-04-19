// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MovieDetail from "./pages/MovieDetail";
import PublicNavBar from "../src/pages/PublicNavBar";
function App() {
  return (
    <div>
      <Router>
        <PublicNavBar />
        <Switch>
          <Route exact path="/movie/:id" component={MovieDetail} />
          <Route path="/" exact component={Homepage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
