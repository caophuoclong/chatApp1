import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./result.css";

function Index(props) {
  const { searchResult, handleExit, handleAddLink } = props;
  const search_result = document.getElementById("result-search-complete");

  if (searchResult.length === 20) {
    if (search_result)
      search_result.style.display = "block";
  }
  else {
    if (search_result)
      search_result.style.display = "none";

  }

  const addToList = async (result) => {
    // try{
    //     if(result){
    //     const url = result.url;
    //     const img_url = result.img_url;
    //     const title = result.title;
    //     const urlAxios = ;
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
    //         
    //     }
    // }
    //   }catch(error){
    //       console.log(error);
    //   }
  };
  const handleAddClick = async (event) => {
    const id = event.target.id.replace("btn", "");
    const url = searchResult[id];
    handleAddLink(url)
  };
  const playNowAndSave = (e) => {

  };

  return (
    <div className="fixed w-full h-screen result hidden" id="result-search-complete">
      <FontAwesomeIcon
        className="fixed right-4 top-2 cursor-pointer"
        onClick={handleExit}
        icon={faTimes}
        size="2x"
      />
      <div className="box bg-white rounded-3xl w-3/4 h-3/4  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-12 ">

        <ul className="overflow-y-scroll h-full">
          {searchResult.map((value, pos) => (
            <li
              className="my-4 hover:bg-gray-300 flex justify-between items-center cursor-pointer p-4 rounded-3xl"
              key={pos}
              id={`lst${pos}`}
              onClick={playNowAndSave}
            >
              <img
                src={value.thumbnail}
                alt=""
                className="w-2/6 h-24 rounded-2xl"
              />
              <span className="mx-4 truncate text-2xl font-medium w-3/6">{value.title}</span>
              <button
                id={`btn${pos}`}
                onClick={handleAddClick}
                className="w-8 h-8 rounded-full bg-gray-400 mx-2 hover:bg-gray-200"
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
