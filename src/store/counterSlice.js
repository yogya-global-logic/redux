import { createSlice } from "@reduxjs/toolkit";
const  initialState = 0;
const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        add(state,action){
            console.log("state in add = ",state,action);
            return state + 1
        },
        remove(state,action){
            return state - 1;
        },
        setZero(state,action){
            return 0
        }
        
    }
})
export const{add,remove,setZero} = counterSlice.actions;
export default counterSlice.reducer;