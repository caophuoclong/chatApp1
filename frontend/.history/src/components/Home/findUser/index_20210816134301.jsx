import React from 'react';
import PropTypes from 'prop-types';

FindUser.propTypes = {
    listUser: PropTypes.array,
};
FindUser.defaultProps = {
    listUser: [],
}

function FindUser(props) {
    const {listUser} = props;
    
    if(listUser.length > 0) {
        if(document.getElementById("findUser"))document.getElementById("findUser").style.display = "block";
    }else{
        if(document.getElementById("findUser"))document.getElementById("findUser").style.display = "none";

    }
    
    return (
        <div className="w-full h-screen bg-black fixed" id="findUser">
            <button className="text-white">Click</button>
            
        </div>
    );
}

export default FindUser;