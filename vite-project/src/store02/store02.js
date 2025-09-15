import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "./reducers02/postReducer";

const initalState = {
    posts:{
        posts:[],
        loading:false,
        error: null,
    }
}
export const store = configureStore({
    reducer:{

        posts: postReducer,

    },
    preloadedState: initalState,


})