import React from 'react';
import PropTypes from 'prop-types';
import DumpComponent from './dump';

LeftBar.propTypes = {
    
};

function LeftBar(props) {
    return (
        <div className="left-bar w-auto">
            <DumpComponent/>
        </div>
    );
}

export default LeftBar;