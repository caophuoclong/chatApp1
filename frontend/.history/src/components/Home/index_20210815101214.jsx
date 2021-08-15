import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axiosClient from "../../axios/axiosClient";
import LeftBar from "./LeftBar";
import Main from "./Main";
import getYtbInfo from "../../function/getYtbInfo"
import jwt from "jsonwebtoken"
import "./home.css";

import dotenv from "dotenv";

dotenv.config();
const serectKey = process.env.SERECT_KEY;
function Home(props) {
  const dispatch = useDispatch();
  const listLink = useSelector(state => state.listLink);
  useEffect(()=>{
    const token = window.localStorage.getItem("token");
    jwt.verify(token, serectKey,(data,err)=>{

    })
  },[])
  return (
    <div className="flex flex-start h-screen p-2">
      <LeftBar />
      <Main />
    </div>
  );
}

export default Home;
