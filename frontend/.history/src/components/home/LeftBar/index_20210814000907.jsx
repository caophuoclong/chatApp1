import React from 'react';
import PropTypes from 'prop-types';

LeftBar.propTypes = {
    
};

function LeftBar(props) {
    return (
        <div className="flex flex-col mx-2 left-bar w-1/3 border border-yellow-900">
            <div className="h-3/4 w-full flex">
                <div className="w-2/3 h-full bg-yellow-900"></div>
                <div className="w-1/3 h-full bg-black"></div>
            </div>
            <div className="h-1/4"></div>
        </div>
    );
}

export default LeftBar;