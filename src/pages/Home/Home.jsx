import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Post } from "../../components";
import {
  setFetchPostFailure,
  setFetchPostStart,
  setFetchPostSuccess,
} from "../../redux/slices/blogSlice";
import styles from "./Home.module.css";

const Home = () => {
  const blog = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  const fetchData = async () => {
    try {
      dispatch(setFetchPostStart());
      const res = await axios.get("http://localhost:5000/blog/");
      const data = await res.data;
      dispatch(setFetchPostSuccess(data.posts));
      console.log(data);
    } catch (err) {
      dispatch(setFetchPostFailure());
      console.log(err.message);
    }
  };
  useState(async () => {
    await fetchData();
  }, [dispatch]);
  console.log(blog);
  return (
    <div className={styles.posts}>
      {blog.posts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </div>
  );
};

export default Home;
