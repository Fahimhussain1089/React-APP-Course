import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store02/actions02/postActions";
import PostList from "../PostList";
// import { fetchPosts } from "./store02/actions02/postActions";  // Adjust path
// import { fetchPosts } from "../store02/actions02/postActions";

//

const FetchingAPI = () => {
  return (
    <div className="app">
      <h1>Welcome to Fetching API Project</h1>
      <PostList />
    </div>
  );
};

export default FetchingAPI;