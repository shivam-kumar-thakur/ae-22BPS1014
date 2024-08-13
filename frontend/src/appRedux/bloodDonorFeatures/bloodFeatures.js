import { createSlice } from "@reduxjs/toolkit";

const initialState={ 
    reg:{}
};
export const bloodFeaturesSlice=createSlice({
    name:"bloodFeatures",
    initialState,
    reducers:{
        reg:(state,action)=>{
            const data=action.payload.regData
            state.reg={
                ...state.reg,
                ...data
            };
        },
        // if you need otp then set this state in email.
        setOtpFlag:(state,action)=>{
            if(action.payload.set){
                state["setOtp"]=action.payload.email;
            }
            else{
                state.setOtp=null;
            }
        },
        clear:()=>{return initialState},
    }
})

export const {user,reg,setOtpFlag,setUser,clear}=bloodFeaturesSlice.actions;
export default bloodFeaturesSlice.reducer;