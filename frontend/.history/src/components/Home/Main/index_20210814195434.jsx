import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faSearch } from "@fortawesome/free-solid-svg-icons";
import "./main.css";
import moment from "moment";
Main.propTypes = {};
function Main(props) {
  const [online, setOnline] = useState(false);

  return (
    <div className="w-2/3 mr-2 flex flex-wrap">
      <div className="chat-area h-5/6 w-full pb-2">
        <div className="p-2 flex bg-white shadow-2xl h-auto">
          <div className="img relative w-15 ">
            <img src="https://picsum.photos/60" className="w-12 h-12 rounded-full " alt="" />
            {!online ? <div className="status-shape w-2 h-2 rounded-full bg-red-500"></div> : <div className="status-shape w-2 h-2 rounded-full bg-green-500"></div>}
          </div>
          <div className="info ml-2 h-12">
            <div className="name text-xl">Tran cao phuoc Long</div>
            <div className="status-text text-xs text-gray-600">Vua moi truy cap</div>
          </div>
        </div>
        <ul className="chat-show bg-bg_chat w-full rounded-bl-2xl rounded-br-2xl shadow-inner p-5">
          <li className="message message-receiver max-w-md">
            <p className="text-message ">chao ban ahjdskjashdjkahs jkdhask hdkasj hkdh asjkdhkas shajkd haskj dhaskj hasdk jsajk hasjkd haskdhjkas</p>
            <span className="time-message">
              {new Date(Date.now()).toLocaleTimeString() + " - " + new Date(Date.now()).toLocaleDateString('vn')}
            </span>
          </li>
          <li className="message message-receiver max-w-md">
            ban ten gi
          </li><li className="message message-sender max-w-md">
            Minh ten long
          </li>
        </ul>
      </div>
      <form className="inp-area w-full  rounded-xl h-1/6 flex flex-cols items-center px-2 mb-2">
        <input
          type="text"
          className="h-1/3 w-11/12 mr-2 outline-none px-3 text-xl font-bold color-inherit border rounded-full border-transparent focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          placeholder="Gui tin nhan"
        />
        <button>
          <FontAwesomeIcon icon={faPaperPlane} size="2x" />
        </button>
      </form>
    </div>
  );
}

export default Main;
