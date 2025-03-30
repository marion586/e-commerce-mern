import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { LoginPage, SignUpPage, ActivationPage } from "./Routes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { server } from "./server";
import axios from "axios";
import store from "./redux/store";
import { loadUser } from "./redux/actions/user";

const App = () => {
  // this is i used without redux
  // const location = useLocation();
  // useEffect(() => {
  //   if (!location.pathname.startsWith("/activation")) {
  //     axios
  //       .get(`${server}/user/getuser`, { withCredentials: true })
  //       .then((res) => {
  //         console.log(res);
  //         toast.success(res.data.message);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         toast.error(err.response?.data?.message || "An error occurred");
  //       });
  //   }
  // }, [location.pathname]); // ✅ Runs when route changes

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route
          path="/activation/:activation_token"
          element={<ActivationPage />}
        />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
