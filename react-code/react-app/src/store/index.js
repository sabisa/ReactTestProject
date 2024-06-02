import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '@/store/slices/theme'
import { theme } from "antd";

export const store = configureStore({
    reducer: {
        theme: themeReducer
    }
})

export default store