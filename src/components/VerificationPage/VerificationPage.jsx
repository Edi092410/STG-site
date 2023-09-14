import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import axios from "axios"; // Make sure to import axios

export const VerificationPage = () => {
  let { tokens } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  const [response, setResponse] = useState({});

  useEffect(() => {
    if (token) {
      verifyToken();
    }
  }, [token]);

  const verifyToken = async () => {
    try {
      const response = await axios.get(
        `https://admin.e-siticom.com/api/verification?token=${token}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setResponse(response);
    } catch (error) {
      console.log(error);
      // Handle any errors that occur during the API call
    }
  };

  return (
    <div className="min-h-[90vh]">
      {response.data?.success && response.data?.success === true ? (
        <div>
          <div>Таны хаяг баталгаажлаа</div>
          <button
            className="p-5 bg-slate-700 text-white"
            onClick={() => navigate("/login")}
          >
            Нэвтрэх
          </button>
        </div>
      ) : (
        <div>Баталгаажууллат амжилтгүй!</div>
      )}
    </div>
  );
};
