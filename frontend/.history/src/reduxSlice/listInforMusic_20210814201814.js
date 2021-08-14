import {createSlice} from "@reduxjs/toolkit";

const listInfor = createSlice({
    name: "Infor music",
    initialState: [{
        name: "",
        thumbnail: "",
        url: "",
    }],
    reducer:{
        add: (state, action)=>{
            state.forEach((value)=>{
                if(JSON.stringify(value) === JSON.stringify(action.payload)){
                    return;
                }
            })
            state.push(action.payload);
        }

    }
})