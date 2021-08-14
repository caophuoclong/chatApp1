import React from 'react';
import PropTypes from 'prop-types';

Main.propTypes = {
    
};

function Main(props) {
    return (
        <div className="w-3/5 bg-black flex flex-cols mr-2 h-full">
            <div className="status-bar"></div>
            <div className="chat-area h-4/5 w-full bg-white"></div>
            <div className="inp-area"></div>
        </div>
    );
}

export default Main;