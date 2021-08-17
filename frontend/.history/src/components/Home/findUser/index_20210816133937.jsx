import React from 'react';
import PropTypes from 'prop-types';

FindUser.propTypes = {
    listUser: PropTypes.string,
};
FindUser.defaultProps = {
    listUser: [],
}

function FindUser(props) {
    const {listUser} = props;
    
    if(listUser.length > 0) {
        document.getElementById("findUser").style.display = "block";
    }else{
        document.getElementById("findUser").style.display = "none";

    }
    
    return (
        <div className="w-full h-screen bg-black" id="findUser">
            
        </div>
    );
}

export default FindUser;