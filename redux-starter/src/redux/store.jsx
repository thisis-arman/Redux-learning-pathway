
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'

import logger from 'redux-logger'



const store = configureStore({
    reducer: {
        counter: counterReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

})



export default store;



/* 

import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})


export default store; */