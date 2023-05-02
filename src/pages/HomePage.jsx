import React, { useEffect } from "react";
import axios from "axios";
import Layout from "./../components/Layout";
import { useDispatch } from "react-redux";

import { setUser } from "../redux/features/userSlice";

const Homepage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      getUserData(token);
    }
  }, []);

  //login userdata
  const getUserData = async (token) => {
    try {
      const res = await axios.post("/api/v1/user/getUserData", {
        token,
      });
      console.log(res.data.data);
      dispatch(setUser(res.data.data));
      console.log("sucessfully getuserDATA");
    } catch (error) {
      console.log(error);
      console.log("failed userDATA");
    }
  };
  return (
    <Layout>
      <h1>Home page</h1>
    </Layout>
  );
};

export default Homepage;
