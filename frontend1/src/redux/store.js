import { configureStore } from '@reduxjs/toolkit'
import statuslice from './statuslice';


const store=configureStore({
    reducer:{
       status:statuslice
    }
})

export default store;