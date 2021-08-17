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
import FindUser from "./findUser";
function Home(props) {
  const serectKey = "2603";
  const history = useHistory();
  const dispatch = useDispatch();
  const token = window.localStorage.getItem("token");
  const listLink = useSelector(state => state.listLink);
  const [response, setResponse] = useState([]);
  const [listRooms, setListRoom] = useState([]);
  const [listFriends, setListFriend] = useState([]);
  const [listInfo, setListInfo] = useState([]);

  useEffect(() => {
    jwt.verify(token, serectKey, (error, data) => {
      if (!error) {
        const { id, username,avatar } = data;
        const action = addNewInfor({ id, username,avatar });
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
    const getUser = async () => {
      const token = window.localStorage.getItem("token");
      const headers = {
        authorization: token
      }
      const response = await axiosClient.get("/dashboard/getUser", {
        headers: headers
      })
      const result = response.data.result;
      const {listFriend, listRoom, listMusic} = result;
      setListRoom(listRoom);
      setListFriend(listFriend);
      const action = addList(listMusic);
      dispatch(action);
    }
    getUser()
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
  const deleteMusic = async (e) => {
    const id = e.target.id;
    if (id === null || id === undefined || id === "") return;
    const url = `https://www.youtube.com/watch?v=${id}`
    const action = removeLinkFromList(url);
    dispatch(action);
    const token = window.localStorage.getItem("token");
    const headers = {
      authorization: token
    }
    const response = await axiosClient.post("/dashboard/remove", { url }, {
      headers: headers
    })
    if (response.status === 200)
      toast.success(`🦄 Ban da xoa bai hat thanh cong`, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

  }
  const onAddLink = async (value) => {
    const token = window.localStorage.getItem("token");
    const headers = {
      authorization: token
    }
    const response = await axiosClient.post("/dashboard/setmusic", { link: value.url }, {
      headers: headers
    })
    const action = addList(response.data.listMusic);
    dispatch(action);
    const url = value.url;
    const title = value.title;
    const thumbnail = value.thumbnail;
    const info = { url, title, thumbnail };
    const actionAddInfo = addMusicInfor(info);
    dispatch(actionAddInfo);
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
  const onFindUser = async (data1, event)=>{
    event.preventDefault();
    const {find_user } = data1;
    const token = window.localStorage.getItem("token");
    const headers = {
      authorization: token
    }
    const {data} = await axiosClient.get(`/dashboard/finduser?username=${find_user}`,{
      headers: headers
    });
    setListInfo(data.listInfo);
    event.target.reset();
  }
  const handleAddFriend = async (e)=>{
    const id = e.target.id;
    const token = window.localStorage.getItem("token");
    console.log(token);
    const headers = {
      authorization: token
    }
    const userId = id;
    const response = await axiosClient.post(`/friend/addfriend`,{userId},{
      headers: headers
    });

    if(response.status === 200) toast.success(`Them ban thanh cong`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  const handleChatNow = ()=>{

  }
  return (
    <div className="flex flex-start h-screen">
      <LeftBar onSubmit={handleSubmit} deleteMusic={deleteMusic} listFriend={listFriends} listRoom={listRooms} findUser={onFindUser} chatNow={handleChatNow}/>
      <Main />
      <ResultSearch searchResult={response} handleExit={handleExit} handleAddLink={onAddLink} />
      <ToastContainer />
      <FindUser listUser={listInfo} addFriend={handleAddFriend}/>

    </div>
  );
}

export default Home;
