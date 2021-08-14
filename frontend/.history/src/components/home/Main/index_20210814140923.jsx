import React from 'react';
import PropTypes from 'prop-types';

Main.propTypes = {
    
};

function Main(props) {
    return (
        <div className="w-3/5 bg-black mr-2 h-full my-2">
            <div className="status-bar w-full h-1/6 bg-red-800"></div>
            <div className="chat-area h-4/6 w-full bg-white"></div>
            <div className="inp-area w-full h-1/6 bg-yellow-300"></div>
        </div>
    );
}

export default Main;