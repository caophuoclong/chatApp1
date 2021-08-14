import React from "react";
import LeftBar from "./LeftBar";
import Main from "./Main";

function Home(props) {
  return (
    <div className="flex flex-start h-screen p-2">
      <LeftBar />
      <Main />
    </div>
  );
}

export default Home;
