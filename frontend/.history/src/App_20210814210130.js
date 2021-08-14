import "./App.css";
import Home from "./components/Home";
import io from "socket.io-client";
function App() {
  const socket = io();
  return (
    <div className="App h-screen">
      <Home socket={socket}/>
    </div>
  );
}

export default App;
