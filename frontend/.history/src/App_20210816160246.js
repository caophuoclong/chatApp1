import "./App.css";
import Home from "./components/Home";
import io from "socket.io-client";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from "./components/register";
import Login from "./components/login";
function App() {
  return (
    <Router>
      <div className="App h-screen">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
