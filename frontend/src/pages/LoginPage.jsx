import React, { useEffect } from "react";
import Login from "../components/Login";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  console.log('login page');
  const navigate = useNavigate();
  const {isAuthenticated} = useSelector((state) => state.user);

  useEffect(() => {
    console.log('login page' , isAuthenticated);
    if(isAuthenticated === true){
      // window.location.href = "/products";
      console.log("isAuthenticated", isAuthenticated);
      navigate("/");
      window.location.reload(true)
    }
  }, [isAuthenticated, navigate]);
  return (
    <div>
      <Login />
    </div>
  );
};

export default LoginPage;
