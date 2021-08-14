import logo from "./logo.svg";
import "./App.css";
import LeftBar from "./components/LeftBar";
import Main from "./components/Main";
import RightBar from "./components/LeftBar";

function App() {
  return (
    <div className="App">
      <LeftBar />
      <Main />
      <RightBar />
    </div>
  );
}

export default App;
