import React from "react";
import LeftBar from "./LeftBar";
import Main from "./Main";
import RightBar from "./RightBar";

function Home(props) {
  return (
    <div className="flex flex-start h-screen p-2">
      <LeftBar />
      <Main />
      <RightBar />
    </div>
  );
}

export default Home;
