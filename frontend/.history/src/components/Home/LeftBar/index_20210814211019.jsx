import {
  faBan,
  faChevronLeft,
  faChevronRight,
  faPause,
  faPlay,
  faSearch,
  faShare,
  faStepBackward,
  faStepForward,
  faStop,
  faStore
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import ProgressBar from "../../../customComponents/progressBar";
import "./leftbar.css";

LeftBar.propTypes = {};

function LeftBar(props) {
  const [collapse, setCollapse] = useState(false);
  const handleResize = () => {
    const music = document.getElementById("left-bar-music");
    const friend = document.getElementById("left-bar-friend0");
    if (!collapse) {
      music.classList.remove("w-3/5");
      music.classList.add("w-1/5");
      friend.classList.remove("w-2/5");
      friend.classList.add("w-4/5");
      setCollapse(true);
    } else {
      music.classList.add("w-3/5");
      music.classList.remove("w-1/5");
      friend.classList.add("w-2/5");
      friend.classList.remove("w-4/5");
      setCollapse(false);
    }


  }
  return (
    <div className="flex flex-col mr-2 left-bar w-1/3 ">
      <div className="h-3/4 w-full flex ">
        <div className="w-3/5 h-full bg-white p-1 relative rounded-xl mr-2 shadow-2xl" id="left-bar-music">
          <button id="resize-leftBar" onClick={handleResize}>
            {!collapse ? <FontAwesomeIcon icon={faChevronLeft} size="2x" /> : <FontAwesomeIcon icon={faChevronRight} size="2x" />}
          </button>
          <div className="flex items-center user w-full bg-gray-200 h-12 border border-color-green-900 ring-2 ring-offset-gray-300 rounded-2xl p-1">
            <img
              src="https://picsum.photos/35"
              className="user-avatar rounded-full"
              alt=""
            />
            <p className="user-name mx-3 text-lg font-medium truncate">
              Tran Cao Phuoc Long
            </p>
          </div>
          <div className="list-and-sear w-full h-auto bg-gray-200 my-3 rounded-full">
            <form action="" className="p-1 flex flex-nowrap align-center ">
              <input
                type="text"
                placeholder="Tim bai hat"
                className="h-9 w-full bg-transparent outline-none px-3 text-lg text-honeydew placeholder-gray-900::placeholder"
              />
              <button>
                <FontAwesomeIcon
                  icon={faSearch}
                  size="1x"
                  className="text-xl mx-1"
                />
              </button>
            </form>
          </div>
          <ul className="listMusics h-3/5 py-2 overflow-hidden rounded-xl bg-transparent">
            <li className="music flex">
              <img
                src="https://picsum.photos/60"
                alt=""
                className="rounded-2xl img-music"
              />
              <p>Xin chao banj Xin chao banj Xin chao banj</p>
              <button id="" className="absolute right-1 text-red-400 opacity-0 hover:opacity-1">
                <FontAwesomeIcon icon={faBan} size="1x" />
              </button>
            </li>
            <li className="music flex align-center ">
              <img
                src="https://picsum.photos/60"
                alt=""
                className="rounded-2xl"
              />
              <p>Xin chao banj</p>
            </li>
            <li className="music flex align-center ">
              <img
                src="https://picsum.photos/60"
                alt=""
                className="rounded-2xl"
              />
              <p>Xin chao banj</p>
            </li>
            <li className="music flex align-center ">
              <img
                src="https://picsum.photos/60"
                alt=""
                className="rounded-2xl"
              />
              <p>Xin chao banj</p>
            </li>
            <li className="music flex align-center ">
              <img
                src="https://picsum.photos/60"
                alt=""
                className="rounded-2xl"
              />
              <p>Xin chao banj</p>
            </li>
            <li className="music flex align-center ">
              <img
                src="https://picsum.photos/60"
                alt=""
                className="rounded-2xl"
              />
              <p>Xin chao banj</p>
            </li>
            <li className="music flex align-center ">
              <img
                src="https://picsum.photos/60"
                alt=""
                className="rounded-2xl"
              />
              <p>Xin chao banj</p>
            </li>
            <li className="music flex align-center ">
              <img
                src="https://picsum.photos/60"
                alt=""
                className="rounded-2xl"
              />
              <p>Xin chao banj</p>
            </li>
            <li className="music flex align-center ">
              <img
                src="https://picsum.photos/60"
                alt=""
                className="rounded-2xl"
              />
              <p>Xin chao banj</p>
            </li>
            <li className="music flex align-center ">
              <img
                src="https://picsum.photos/60"
                alt=""
                className="rounded-2xl"
              />
              <p>Xin chao banj</p>
            </li>
            <li className="music flex align-center ">
              <img
                src="https://picsum.photos/60"
                alt=""
                className="rounded-2xl"
              />
              <p>Xin chao banj</p>
            </li>
          </ul>
        </div>
        <div className="w-2/5 h-full bg-red-900 rounded-xl p-2"
          id="left-bar-friend0">
          <ul className="w-full h-full bg-red-900 rounded-xl" id="left-bar-friend">
            <li className="friend flex w-full my-3">
              <img src="https://picsum.photos/50" className="rounded-full" alt="" />
              <div className="self-center mx-2 w-full">
                <p className="truncate w-9/12 font-medium">Be man</p>
                <p className="truncate w-9/12 font-medium">Xin chao anh yeu</p>
              </div>
            </li>
            <li className="friend flex w-full my-3">
              <img src="https://picsum.photos/50" className="rounded-full" alt="" />
              <div className="self-center mx-2 w-full">
                <p className="truncate w-9/12 font-medium">Be man</p>
                <p className="truncate w-9/12 font-medium">Xin chao anh yeu</p>
              </div>
            </li>
            <li className="friend flex w-full my-3">
              <img src="https://picsum.photos/50" className="rounded-full" alt="" />
              <div className="self-center mx-2 w-full">
                <p className="truncate w-9/12 font-medium">Be man</p>
                <p className="truncate w-9/12 font-medium">Xin chao anh yeu</p>
              </div>
            </li>
            <li className="friend flex w-full my-3">
              <img src="https://picsum.photos/50" className="rounded-full" alt="" />
              <div className="self-center mx-2 w-full">
                <p className="truncate w-9/12 font-medium">Be man</p>
                <p className="truncate w-9/12 font-medium">Xin chao anh yeu</p>
              </div>
            </li>
            <li className="friend flex w-full my-3">
              <img src="https://picsum.photos/50" className="rounded-full" alt="" />
              <div className="self-center mx-2 w-full">
                <p className="truncate w-9/12 font-medium">Be man</p>
                <p className="truncate w-9/12 font-medium">Xin chao anh yeu</p>
              </div>
            </li>
            <li className="friend flex w-full my-3">
              <img src="https://picsum.photos/50" className="rounded-full" alt="" />
              <div className="self-center mx-2 w-full">
                <p className="truncate w-9/12 font-medium">Be man</p>
                <p className="truncate w-9/12 font-medium">Xin chao anh yeu</p>
              </div>
            </li>
            <li className="friend flex w-full my-3">
              <img src="https://picsum.photos/50" className="rounded-full" alt="" />
              <div className="self-center mx-2 w-full">
                <p className="truncate w-9/12 font-medium">Be man</p>
                <p className="truncate w-9/12 font-medium">Xin chao anh yeu</p>
              </div>
            </li>
            <li className="friend flex w-full my-3">
              <img src="https://picsum.photos/50" className="rounded-full" alt="" />
              <div className="self-center mx-2 w-full">
                <p className="truncate w-9/12 font-medium">Be man</p>
                <p className="truncate w-9/12 font-medium">Xin chao anh yeu</p>
              </div>
            </li>

          </ul>
        </div>

      </div>
      <div className="h-1/4 w-full bg-gray-800 flex flex-col my-1 rounded-xl">
        <div className="p-3 flex flex-nowrap">
          <img
            src="https://picsum.photos/60"
            className="img-music rounded-2xl"
            alt=""
          />
          <p className="text-white self-center mx-2 text-xl">Xin chao phuoc long</p>
        </div>
        <div className="px-2">
          <ProgressBar progressPercentage="50" />
          <div class="text-gray-500 dark:text-gray-400 flex justify-between text-sm font-medium tabular-nums">
            <div>24:16</div>
            <div>75:50</div>
          </div>
        </div>
        <div className="function-button grid grid-cols-auto">
          <button>
            <FontAwesomeIcon icon={faStore} size="2x" className="text-white" />
          </button>
          <button>
            <FontAwesomeIcon className="text-white" icon={faStepBackward} size="2x" />
          </button>

          <button>
            {1 ? (
              <FontAwesomeIcon className="text-white" icon={faPause} size="2x" />
            ) : (
              <FontAwesomeIcon className="text-white" icon={faPlay} size="2x" />
            )}
          </button>
          <button>
            <FontAwesomeIcon className="text-white" icon={faStepForward} size="2x" />
          </button>
          <button>
            <FontAwesomeIcon className="text-white" icon={faShare} size="2x" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
