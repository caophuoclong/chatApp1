import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

Main.propTypes = {
    
};

function Main(props) {
    return (
        <div className="w-3/5 mr-2 flex flex-wrap">
            {/* <div className="status-bar w-full h-1/5 bg-red-800"></div> */}
            <div className="chat-area h-3/4 w-full bg-black mb-1 rounded-xl"></div>
            <div  className="inp-area w-full  bg-yellow-300 rounded-xl h-1/4 flex flex-cols items-center px-2">
                <input type="text" className="h-1/3 w-11/12 " />
                <FontAwesomeIcon icon={faSearch} size="2x"/>
            </div>
        </div>
    );
}

export default Main;