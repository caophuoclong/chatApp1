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
    const style ={
        "background-color" : "rgba(223,242,239,0.7)"
    }
    return (
        <div className="w-screen h-screen bg-black fixed" id="findUser" style={style}>
            <button className="text-black absolute top-2 right-8" onClick={()=>{if(document.getElementById("findUser"))document.getElementById("findUser").style.display = "none";}}>Exit</button>
            <div className="absolute w-3/4 h-3/4 top-1/2 left-1/2 bg-white transform -translate-x-1/2 -translate-y-1/2 rounded-3xl px-4 py-4">
                <ul className="px-8 py-8 h-11/12 overflow-hidden overflow-y-scroll  ">
                    {listUser.map((value,pos)=>(
                        <li className="flex items-center justify-center">
                            <img src={value.avatar} alt="" className="w-12 h-12 rounded-full mx-8"/>
                            <p  className="mx-8 text-3xl font-bold">{value.username}</p>
                            <button id={value.id} className="bg-gray-300 text-white w-12 h-12 rounded-3xl">Add</button>
                        </li>
                    )
                    )}
                </ul>
            </div>
            
        </div>
    );
}

export default FindUser;