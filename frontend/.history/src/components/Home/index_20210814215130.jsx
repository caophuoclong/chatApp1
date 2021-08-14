import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axiosClient from "../../axios/axiosClient";
import LeftBar from "./LeftBar";
import Main from "./Main";


function Home(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    const getListLink = async () => {
      const url = "/"
      const response = await axiosClient.get(url, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }
  }, [])
  return (
    <div className="flex flex-start h-screen p-2">
      <LeftBar />
      <Main />
    </div>
  );
}

export default Home;
