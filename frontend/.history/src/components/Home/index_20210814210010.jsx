import React from "react";
import LeftBar from "./LeftBar";
import Main from "./Main";
import { useDispatch, useSelector } from "react";



function Home(props) {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-start h-screen p-2">
      <LeftBar />
      <Main />
    </div>
  );
}

export default Home;
