import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { server } from "../server";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

function ActivationPage() {
  const { activation_token } = useParams();

  const [error, setError] = useState(false);

  useEffect(() => {
    const activationEmail = async () => {
      try {
        const res = await axios.post(
          `${server}/user/activation`,
          {
            activation_token,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        console.log(res);
        // // Check for successful activation status
        // if (res.status === 201) {
        //   // Assuming the response contains a token in the data
        //   const { token } = res.data;

        //   // Set cookie with token (valid for 7 days)
        //   Cookies.set("token", token, {
        //     expires: 7,
        //     secure: true, // Requires HTTPS
        //     sameSite: "Lax", // Adjust based on your needs
        //   });
        // }
      } catch (error) {
        console.log(error.response.data.message);
        setError(true);
      }
    };

    activationEmail();
  }, [activation_token]);
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {error ? (
        <p>Your token is expired</p>
      ) : (
        <p>Your account has been created successfully</p>
      )}
    </div>
  );
}

export default ActivationPage;
