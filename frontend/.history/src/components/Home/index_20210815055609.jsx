import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axiosClient from "../../axios/axiosClient";
import LeftBar from "./LeftBar";
import Main from "./Main";
import getYtbInfo from "../../function/getYtbInfo"
import "./home.css";
function Home(props) {
  const dispatch = useDispatch();
  const listLink = useSelector(state => state.listLink);
  useEffect(() => {
    const getListLink = async () => {
      const url = "/"
      const response = await axiosClient.get(url, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log(response);
    }
    getListLink();
  }, [])
  useEffect(() => {
    const getInfo = async () => {
      const info = await getYtbInfo(listLink);
      console.log(info);
    }

  }, [listLink])
  return (
    <div className="flex flex-start h-screen p-2">
      <LeftBar />
      <Main />
    </div>
  );
}

export default Home;
