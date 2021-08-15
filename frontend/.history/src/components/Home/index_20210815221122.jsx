import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axiosClient from "../../axios/axiosClient";
import LeftBar from "./LeftBar";
import Main from "./Main";
import getYtbInfo, { progressYoutubeInfo } from "../../function/getYtbInfo"
import jwt from "jsonwebtoken"
import "./home.css";
import { addNewInfor } from "../../reduxSlice/inforUserSlice";
import { useHistory } from "react-router-dom";
import searchWithKeyword from "../../function/searchWithKeyword";
import ResultSearch from "./resultSearch/index"
import { addList, removeLinkFromList } from "../../reduxSlice/listLinkSlice";
import { addMusicInfor, setEmpty } from "../../reduxSlice/listInforMusic"
import { toast, ToastContainer } from "react-toastify";
function Home(props) {
  const serectKey = "2603";
  const history = useHistory();
  const dispatch = useDispatch();
  const token = window.localStorage.getItem("token");
  const listLink = useSelector(state => state.listLink);
  const [response, setResponse] = useState([]);
  useEffect(() => {
    jwt.verify(token, serectKey, (error, data) => {
      if (!error) {
        const { id, username } = data;
        const action = addNewInfor({ id, username });
        dispatch(action);
      } else {
        alert("Phien dang nhap da het han");
        history.push("/login");
      }
    })
  }, [])
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const interval = setInterval(() => {
      jwt.verify(token, serectKey, async (error, data) => {
        if (!error) {
          const headers = {
            'authorization': token
          }
          if (Date.now() * 1000 >= data.expired - 6000) {
            const response = await axiosClient.post("/auth/refreshtoken", {
              headers: headers
            });
            window.localStorage.setItem("token", response.data);
            console.log("reFresh success");
          }
          console.log("data");
        }
      })
    }, 6000)
    return () => {
      clearInterval(interval);
    }
  }, [])
  useEffect(() => {
    const getLinkMusic = async () => {
      const token = window.localStorage.getItem("token");
      const headers = {
        authorization: token
      }
      const response = await axiosClient.get("/dashboard/getmusic", {
        headers: headers
      })
      const action = addList(response.data.listMusic);
      dispatch(action);
    }
    getLinkMusic()
  }, [])
  useEffect(() => {
    const action = setEmpty();
    dispatch(action);
    listLink.forEach(async value => {
      const url = value;
      const { title, thumbnail } = await progressYoutubeInfo(url);
      const info = { url, title, thumbnail };
      const action = addMusicInfor(info);
      dispatch(action);
    })
    console.log(listLink);

  }, [listLink])
  const handleSubmit = async (data, e) => {
    e.preventDefault();
    const { inp_search_text } = data;
    let response_ytb = await searchWithKeyword(inp_search_text);
    let array_link = [];
    response_ytb.data.items.forEach(item => {
      const id = item.id.videoId;
      const url = `https://www.youtube.com/watch?v=${id}`;
      const title = item.snippet.title;
      const thumbnail = item.snippet.thumbnails.medium.url;
      array_link.push({ url, title, thumbnail });
    })

    setResponse(array_link);

    e.target.reset();
  }
  const handleExit = () => {
    setResponse([]);
  }
  const deleteMusic = (e) => {
    const id = e.target.id;
    if (id === null || id === undefined || id === "") return;
    const url = `https://www.youtube.com/watch?v=${id}`
    const action = removeLinkFromList(url);
    dispatch(action);
  }
  const onAddLink = (value) => {
    console.log(value);
    toast.success(`🦄 Ban da them bai hat ${value.title} thanh cong`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  return (
    <div className="flex flex-start h-screen p-2">
      <LeftBar onSubmit={handleSubmit} deleteMusic={deleteMusic} />
      <Main />
      <ResultSearch searchResult={response} handleExit={handleExit} handleAddLink={onAddLink} />
      <ToastContainer />

    </div>
  );
}

export default Home;
