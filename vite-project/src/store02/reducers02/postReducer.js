

const initialState = {
    posts:{
        posts: [],
        loading: false,
        error: null,
    }
}

export const postReducer =(state = initialState,action) => {
    switch (action.type) {
        case "FETCH_POSTS_REQUEST":
            return{
                ...state,
                loading: true,
                error: null,  // Reset error on new request

            }
   
        case "FETCH_POSTS_SUCCESS":
            return{
                ...state,
                loading: false,
                posts: action.payload,
                error: null,
                
            }
        
        case "FETCH_POSTS_FAILURE":
            return{
                ...state,
                loading: false,
                error: action.payload,
                posts: [],  // Optional: Reset posts on error
                
            }
     
    
        default:
            return state;
    }

    
}