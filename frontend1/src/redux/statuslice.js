import { createSlice } from "@reduxjs/toolkit";

const initialState={
    status:false
}

const statusSlice=createSlice({
    name:'status',
    initialState,
    reducers:{
        statusfun:(state,action)=>{
            state.status=action.payload
        }
    }
})


export const {statusfun}=statusSlice.actions
export default statusSlice.reducer