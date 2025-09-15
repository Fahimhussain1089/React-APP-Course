import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import api from '../Utils/api';

// axios.interceptors.request.use(request=> {
//     console.log('Starting Request ',request);
//     return request;
// });
// axios.interceptors.response.use(response=> {
//     console.log('Response :',response);
//     return response;
// });
//----------step 2---------------------------

//---------------step 3-----------------------
//create app.jxs

function PostApiCall() {
    const [data,setData]=useState();

    const handleSubmit = (event) => {
        event.preventDefault();

        const newPost={
            title:'Fahimhussain',
            body:'bar',
            userId: 1
        }

        api.post('/posts',newPost)
            .then(response=> {
                console.log('New Post Added:  ', response.data);
                setData([response.data]);
            })
        
    };
        
            
    
    
    return (
        <div className="welcome-text" > 

            <h1>Welcome first Post Api Call </h1>
            <form onSubmit={handleSubmit}>
                <button type='submit'>Add Post</button>
            </form>
        
        </div>

    );
}

export default PostApiCall;