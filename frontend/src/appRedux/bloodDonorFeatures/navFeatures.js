import { createSlice } from "@reduxjs/toolkit";

const initialState={"uri":"mapping"};

export const navMenuFeaturesSlice=createSlice({
    name:"navMenuFeatures",
    initialState,
    reducers:{
        storeUriLocation:(state,action)=>{
            let uriLocation=action.payload.uri;
            state.uri=uriLocation;
        }
    }
})

export const {storeUriLocation}=navMenuFeaturesSlice.actions;
export default navMenuFeaturesSlice.reducer;