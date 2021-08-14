import { createSlice } from "@reduxjs/toolkit";

const listLink = createSlice({
    name: "list Music",
    initialState: [],
    reducers:{
        addList: (state, payload)=>{
            return payload.action;
        },
        addLinkToList: (state, payload)=>{
            state.push(payload.action);
        },
        removeLinkFromList: (state, payload)=>{
            const index = state.indexOf(payload.action);
            return state.splice(index,1);
        }
    }
})