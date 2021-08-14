import React from 'react';
import PropTypes from 'prop-types';

LeftBar.propTypes = {
    
};

function LeftBar(props) {
    return (
        <div className="flex flex-col mx-2 left-bar w-1/3 border border-yellow-900">
            <div className="h-3/4 w-full flex">
                <div className="w-2/3 h-full bg-yellow-900 p-1">
                    <div className="flex items-center user w-full bg-red-900 h-12 border border-color-green-900 ring-2 ring-offset-red-600 rounded-2xl p-1">
                        <img src="https://picsum.photos/35" className="user-avatar rounded-full" alt="" />
                        <p className="user-name mx-3 text-lg font-medium">Tran Cao Phuoc Long</p>
                    </div>
                </div>
                <div className="w-1/3 h-full bg-black"></div>
            </div>
            <div className="h-1/4 w-full bg-red-300"></div>
        </div>
    );
}

export default LeftBar;