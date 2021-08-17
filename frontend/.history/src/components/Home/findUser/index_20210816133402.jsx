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
    return (
        <div className="w-full h-screen">
            
        </div>
    );
}

export default FindUser;