


import {configureStore} from '@reduxjs/toolkit'
// importing reducers from counterSlice, dont want to use {} as counterSlice.reducer is exported as default, if not exprted as default use {}
// counterSlice=counterSlice.reducer--------------see counterSlice.js
import counterSlice from './counterSlice'


export const store = configureStore({
    reducer:{
        // reduces are stored as key value pair as there may be more educes as per no of states
        // counter is reducer name 
        counter:counterSlice
    }
})