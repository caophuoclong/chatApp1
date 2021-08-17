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
            <button className="text-white" onClick={()=>{if(document.getElementById("findUser"))document.getElementById("findUser").style.display = "none";}}>Click</button>
            <div className="absolute w-1/2 h-1/2 top-1/2 left-1/2 bg-white transform -translate-x-1/2 -translate-y-1/2"></div>
            
        </div>
    );
}

export default FindUser;