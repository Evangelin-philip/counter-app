import { createSlice } from "@reduxjs/toolkit";


// to create a lice , we use ceateslice method with an objcet with three values, name, initialState and reduces(actions)
const counterSlice = createSlice({
    // slice name
    name:'counter',
    // initial state
    initialState:{
        // state name:value
        count:0
    },
    reducers:{
        // Action1 a call back function
        increment:(state)=>{
            state.count+=1
        },
        decrement:(state)=>{
            state.count-=1
        },
        reset:(state)=>{
            state.count=0
        },
        // action for increment by amount user entered
        increment_by_amount:(state,action)=>{
            state.count+=action.payload
        }
    }

})


// ---------------------------------------------EXPORTING AS PER REQUIREMNETS
// action needed by components to dispatch
// actions (increment,decrement,reset) will be in actions key of counterSlice
export const {increment,decrement,reset,increment_by_amount} = counterSlice.actions

// 
// reducer need in store to update state
// reducers  will be in reducer key of counterSlice
export default counterSlice.reducer