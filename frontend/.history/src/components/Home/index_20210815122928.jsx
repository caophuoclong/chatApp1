import React, { useState } from "react";
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
import searchWithKeyword from "../../function/searchWithKeyword";

dotenv.config()

function Home(props) {
  const serectKey = "2603";
  const history = useHistory();
  const dispatch = useDispatch();
  const listLink = useSelector(state => state.listLink);
  const token = window.localStorage.getItem("token");
  const [response, setResponse] = useState();
  useEffect(()=>{
    jwt.verify(token, serectKey,(error, data)=>{
      if(!error){
        const {id, username} = data;
        const action = addNewInfor({id, username});
        dispatch(action);
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
  const handleSubmit= async (data,e)=>{
    e.preventDefault();
    const {inp_search_text} = data;
    setResponse(await searchWithKeyword(inp_search_text));
    
    e.target.reset();
  }
  return (
    <div className="flex flex-start h-screen p-2">
      <LeftBar onSubmit={handleSubmit} />
      <Main />
    </div>
  );
}

export default Home;
