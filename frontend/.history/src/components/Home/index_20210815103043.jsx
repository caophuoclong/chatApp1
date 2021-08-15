import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axiosClient from "../../axios/axiosClient";
import LeftBar from "./LeftBar";
import Main from "./Main";
import getYtbInfo from "../../function/getYtbInfo"
import jwt from "jsonwebtoken"
import "./home.css";

import dotenv from 'dotenv'
import { addNewInfor } from "../../reduxSlice/inforUserSlice";
import { useHistory } from "react-router-dom";

dotenv.config();
function Home(props) {
  const serectKey = process.env.SERECT_KEY;

  const history = useHistory();
  const dispatch = useDispatch();
  const listLink = useSelector(state => state.listLink);
  const token = window.localStorage.getItem("token");

  useEffect(()=>{
    jwt.verify(token, serectKey,(data,error)=>{
      if(!error){
        console.log(data);
        // const action = addNewInfor();
        // dispatch(action);
      }else{
        alert("Phien dang nhap da het han");
        history.push("/login");
      }
    })
  },[])
  useEffect(()=>{
    const token = window.localStorage.getItem("token");
    
    const interval = setInterval( ()=>{
      jwt.verify(token, serectKey, async (error, data)=>{
        if(!error){
          const headers = {
            'authorization': token
          }
          if(Date.now()*1000 >= data.expired - 6000){
            const response = await axiosClient.post("/auth/refreshtoken",{
              headers: headers
            });
            window.localStorage.setItem("token",response.data);
          }

        }
      })
    },60000)
    return ()=>{
      clearInterval(interval);
    }
  },[])
  return (
    <div className="flex flex-start h-screen p-2">
      <LeftBar />
      <Main />
    </div>
  );
}

export default Home;
