import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { emptyResult, searchDatatResult } from '../searchResultSlice';
import "./resultSearch.scss";
import Search from "../main/search"
import searchWithKeyWord from '../../../components/searchYoutube';
import { addSong } from '../musicListInfoSlice';
import { addMusicLink } from "../musicListLinkSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setPlayingCurrent } from '../playingCurrentSlice';
import { getId } from '../../../components/inforYoutube';
import { uri } from '../../../axiosClient/apiAxiosClient';
import axios from 'axios';
function Index(props) {  
    const searchResult = useSelector(state => state.searchResult);
    const search_result = document.getElementById("result-search-complete");
    const dispatch = useDispatch();
    const token = JSON.parse(window.localStorage.getItem("token"));
    if(searchResult.length === 20){
        if(search_result)
            search_result.style.display = "block";
    }
    else{
        if(search_result)
        search_result.style.display = "none";

    }
    const exitSearch = ()=>{
        const action = emptyResult();
        dispatch(action);
    }
    const handleSearchSubmit = async (data,e)=>{
        const keyword = data.search_input;
        const response = await searchWithKeyWord(keyword);
        const items = response.data.items;
        const action = emptyResult();
        dispatch(action);
        items.forEach(item=>{
          const id = item.id.videoId;
          const url = "https://www.youtube.com/watch?v="+id;
          const title = item.snippet.title;
          const thumbnail = item.snippet.thumbnails.medium.url;
          const info = {
            id,
            img_url: thumbnail,
            url,
            title
          }
          const actionAddSongToSearchResult = searchDatatResult(info);
          dispatch(actionAddSongToSearchResult);
        })
        e.target.reset();
    
      }

      const addToList = async (result)=>{
        try{
            if(result){
            const url = result.url;
            const img_url = result.img_url;
            const title = result.title;
            const urlAxios = uri + window.location.href.replace(/^.*\/\/[^\/]+/, '')+"/add";
            const headers={
                authorization: token,
            }
            const response = await axios.post(urlAxios,{url: url},{
                headers: headers,
            })
            if(response.status === 200){
                const actionAddLinkToListLink = addMusicLink(url);
                dispatch(actionAddLinkToListLink);
                const id = getId(result.url);
                console.log(id);
                const action1 = addSong({id, url, img_url, title });
                dispatch(action1);  
                toast.success(`🦄 Ban da them bai hat ${title} thanh cong`, {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            }
        }
           
          }catch(error){
              console.log(error);
          }

      }
      const handleAddClick = async (event)=>{
          const id = event.target.id.replace("btn",'');
          const result = searchResult[id];
            addToList(result);
        }
    const playNowAndSave = (e)=>{
        try{       const id = e.target.id.replace("lst",'');
            const result = searchResult[id];
            addToList(result);
        const actionSetPlaying = setPlayingCurrent(result.url);
        dispatch(actionSetPlaying);
        window.localStorage.setItem("current-song",result.url);
        const actionEmptyResult = emptyResult();
        dispatch(actionEmptyResult)} catch(error){}
        
    }
    
    return (
        <div className="result-search" id="result-search-complete">
            <FontAwesomeIcon className="exit-search" onClick={exitSearch} icon={faTimes} size="2x" />
            <div className="box">
                <Search onSearchSubmit={handleSearchSubmit}/>
                <ul className="list__searched">
                    {
                        searchResult.map((value,pos)=>(
                            <li className="result-item"  key={pos} id={`lst${pos}`} onClick={playNowAndSave}>
                                <img src={value.img_url} alt="" className="result-item-thumbnail"/>
                                <span className="result-item-item">{value.title}</span>
                                <button id={`btn${pos}`} onClick={handleAddClick} className="btn-add">+</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <ToastContainer/>
        </div>
    );
}

export default Index;