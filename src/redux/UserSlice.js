import { createSlice } from "@reduxjs/toolkit";

const slice =createSlice({
    name : "usr" ,
    initialState :{
        value : {
            name : undefined,
            role : undefined,
            token : undefined,
            islogin : false
        }
    },
    reducers : {
         addUserData : (state,action)=>{
            state.value = {...action.payload , islogin:true}
         },
         delUserData : (state,action)=>{
            state.value = {
                             name : undefined,
                                role : undefined,
                              token : undefined,
                               islogin : false
        }
         }
    }
});
export const {addUserData,delUserData} = slice.actions;

export default slice.reducer;
