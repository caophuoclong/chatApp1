import {createSlice} from "@reduxjs/toolkit";

const listInfor = createSlice({
    name: "Infor music",
    initialState: [],
    reducers:{
        addMusicInfor: (state, action)=>{
            state.forEach((value)=>{
                if(JSON.stringify(value) === JSON.stringify(action.payload)){
                    return;
                }
            })
            state.push(action.payload);
        },
        removeMusicInfor: (state, action)=>{
            const index = state.findIndex(action.payload);
            state.splice(index, 1);
        },
        setEmpty: (state, action)=>{
            return [];
        }

    }
})

const {actions, reducer} = listInfor;
export const {addMusicInfor, removeMusicInfor} = actions;
export default reducer;
