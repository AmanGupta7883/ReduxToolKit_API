import {configureStore} from '@reduxjs/toolkit'
import ApiSlice from './Slices/Api/ApiSlice'

export const store = configureStore({
    reducer:{
        api: ApiSlice
    },
})