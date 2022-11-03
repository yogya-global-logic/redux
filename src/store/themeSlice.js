import { createSlice } from "@reduxjs/toolkit";
const initialState = true;

const themeSlice = createSlice({
    name:'theme',
    initialState,
    reducers:{
        toggle(state,action){
            return !state;
        }
    }
})
export const{toggle} = themeSlice.actions;
export default themeSlice.reducer