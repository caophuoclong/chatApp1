import "./App.css";
import Home from "./components/Home";
import io from "socket.io-client";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from "./components/register";
import Login from "./components/login";
function App() {
  const socket = io();
  return (
    <Router>
      <div className="App h-screen">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
