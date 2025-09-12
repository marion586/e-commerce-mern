import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { LoginPage, SignUpPage, ActivationPage, HomePage, ProductPage, BestSellingPage, EventsPage, FAQPage, ProductDetailsPage , ProfilePage , ShopCreate} from './Routes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { server } from './server';
import axios from 'axios';
import store from './redux/store';
import { loadUser } from './redux/actions/user';
import { useSelector } from 'react-redux';
import ProtectedRoute from './ProtectedRoute';

const App = () => {
  const { loading ,isAuthenticated } = useSelector((state) => state.user);
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
  if (loading) return null;
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/activation/:activation_token" element={<ActivationPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/product/:name" element={<ProductDetailsPage />} />
        <Route path="/best-selling" element={<BestSellingPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/profile" element={<ProtectedRoute isAuthenticated={isAuthenticated}>

          <ProfilePage />
        </ProtectedRoute>} />

        <Route path="/shop-create" element={<ShopCreate />} />
      </Routes>
      <ToastContainer position="bottom-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
    </>
  );
};

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
