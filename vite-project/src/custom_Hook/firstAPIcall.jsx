import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';



function FirstAPIcall() {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);//currently data not load  mean false :
    const [error, setError] = useState(null);



    useEffect(() => {
        setLoading(true);//data loading true
      //  fetch(
    //   axios.get(
    //         'https://jsonplaceholder.typicode.com/posts'
    //         // 'https://jsonplaceholder.typicode.com/todos/1'
    //     )
           // .then(response => response.json())//remove with fetch because axios not need this line
           // .then(json => //remove with fetch because axios not need this line
            // setData(json);
            // .then(response => {
            //     console.log(response.data);
            //     setData(response.data);//axios use response.data
            //     setLoading(false);//after data loding false
            //    // throw new Error("An error occurred while fetching data.");
            // }).catch(error => {
            //     console.error('Error fetching data:', error);
            //     setError("Failed to fetch the data :=> " + error );
            //     setLoading(false)
            // });
          //step 3 to all api call  

    axios.all([
        axios.get('https://jsonplaceholder.typicode.com/posts'),
        axios.get('https://jsonplaceholder.typicode.com/users'),
       // axios.get('https://jsonplaceholder.typicode.com/comments')
        ])
        .then(
        axios.spread((postsResponse, usersResponse) => {
          console.log('Posts:', postsResponse.data);
          console.log('Users:', usersResponse.data);

          setPosts(postsResponse.data);
          setUsers(usersResponse.data);
          setLoading(false);
        })
      )
            
            
    },[]);

        if (loading) {
            return <p style={{ color: "red" }}>Loading data... wait...</p>;
        }

        if (error) {
            return <p style={{ color: "yellow" }}>{error}</p>
        }


    return (
        <div>
            <h2>Users</h2>
            <ul>
                {users.length > 0 ? (
                users.map((user) => (
                    <li key={user.id}>
                    <p>Name: {user.name}</p>
                      <p>username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    </li>
                ))
                ) : (
                <p>No users found.</p>
                )}
            </ul>

            <h2>Posts</h2>
            <ul>
                {posts.length > 0 ? (
                posts.map((post) => (
                    <li key={post.id}>
                    <p>User ID: {post.userId}</p>
                    <p>Title: {post.title}</p>
                    <p>Body: {post.body}</p>
                    </li>
                ))
                ) : (
                <p>No posts found.</p>
                )}
            </ul>
        </div>
    );
}

export default FirstAPIcall;