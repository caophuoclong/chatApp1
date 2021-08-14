import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faSearch } from '@fortawesome/free-solid-svg-icons';

Main.propTypes = {
    
};

function Main(props) {
    return (
        <div className="w-3/5 mr-2 flex flex-wrap">
            {/* <div className="status-bar w-full h-1/5 bg-red-800"></div> */}
            <div className="chat-area h-5/6 w-full rounded-xl p-2">
                <div className="w-full h-full"></div>

            </div>
            <form  className="inp-area w-full  bg-gray-200 rounded-xl h-1/6 flex flex-cols items-center px-2 mb-2">
                <input type="text" className="h-1/3 w-11/12 mr-2 outline-none px-3 text-xl font-bold color-inherit border rounded-full border-transparent focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" placeholder="Gui tin nhan" />
                <button>
                <FontAwesomeIcon icon={faPaperPlane} size="2x"/>
                </button>
            </form>
        </div>
    );
}

export default Main;