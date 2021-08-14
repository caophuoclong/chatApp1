import React from 'react';
import PropTypes from 'prop-types';

Main.propTypes = {
    
};

function Main(props) {
    return (
        <div className="w-3/5 mr-2 flex">
            {/* <div className="status-bar w-full h-1/5 bg-red-800"></div> */}
            <div className="chat-area h-3/4 w-full bg-black mb-1 rounded-xl"></div>
            <div  className="inp-area w-full  bg-yellow-300 rounded-xl h-1/4"></div>
        </div>
    );
}

export default Main;