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
        <div className="w-screen h-screen bg-black fixed" id="findUser">
            <button className="text-white absolute top-2 right-8" onClick={()=>{if(document.getElementById("findUser"))document.getElementById("findUser").style.display = "none";}}>Exit</button>
            <div className="absolute w-3/4 h-3/4 top-1/2 left-1/2 bg-white transform -translate-x-1/2 -translate-y-1/2 rounded-3xl px-4">
                <ul className="px-8 py-8 h-11/12 overflow-hidden hover:overflow-y-scroll  ">
                    {listUser.map((value,pos)=>(
                        <li className="flex items-center justify-center">
                            <img src={value.avatar} alt="" className="w-12 h-12 rounded-full mx-8"/>
                            <p  className="mx-8 text-3xl font-bold">{value.username}</p>
                            <button id={value.id} className="bg-black text-white">Add</button>
                        </li>
                    )
                    )}
                </ul>
            </div>
            
        </div>
    );
}

export default FindUser;