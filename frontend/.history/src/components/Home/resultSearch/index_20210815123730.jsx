import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./resultSearch.scss";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setPlayingCurrent } from "../playingCurrentSlice";
function Index(props) {
  const { searchResult, handleExit } = props;
  const search_result = document.getElementById("result-search-complete");
  const dispatch = useDispatch();
  const token = window.localStorage.getItem("token");
  // if(searchResult.length === 20){
  //     if(search_result)
  //         search_result.style.display = "block";
  // }
  // else{
  //     if(search_result)
  //     search_result.style.display = "none";

  // }

  const addToList = async (result) => {
    // try{
    //     if(result){
    //     const url = result.url;
    //     const img_url = result.img_url;
    //     const title = result.title;
    //     const urlAxios = uri + window.location.href.replace(/^.*\/\/[^\/]+/, '')+"/add";
    //     const headers={
    //         authorization: token,
    //     }
    //     const response = await axios.post(urlAxios,{url: url},{
    //         headers: headers,
    //     })
    //     if(response.status === 200){
    //         const actionAddLinkToListLink = addMusicLink(url);
    //         dispatch(actionAddLinkToListLink);
    //         const id = getId(result.url);
    //         console.log(id);
    //         const action1 = addSong({id, url, img_url, title });
    //         dispatch(action1);
    //         toast.success(`🦄 Ban da them bai hat ${title} thanh cong`, {
    //             position: "top-right",
    //             autoClose: 1000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             });
    //     }
    // }
    //   }catch(error){
    //       console.log(error);
    //   }
  };
  const handleAddClick = async (event) => {
    const id = event.target.id.replace("btn", "");
    const result = searchResult[id];
    addToList(result);
  };
  const playNowAndSave = (e) => {
    try {
      const id = e.target.id.replace("lst", "");
      const result = searchResult[id];
      addToList(result);
      const actionSetPlaying = setPlayingCurrent(result.url);
      dispatch(actionSetPlaying);
      window.localStorage.setItem("current-song", result.url);
    } catch (error) {}
  };

  return (
    <div className="result-search" id="result-search-complete">
      <FontAwesomeIcon
        className="exit-search"
        onClick={handleExit}
        icon={faTimes}
        size="2x"
      />
      <div className="box">
        <ul className="list__searched">
          {searchResult.map((value, pos) => (
            <li
              className="result-item"
              key={pos}
              id={`lst${pos}`}
              onClick={playNowAndSave}
            >
              <img
                src={value.img_url}
                alt=""
                className="result-item-thumbnail"
              />
              <span className="result-item-item">{value.title}</span>
              <button
                id={`btn${pos}`}
                onClick={handleAddClick}
                className="btn-add"
              >
                +
              </button>
            </li>
          ))}
        </ul>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Index;
