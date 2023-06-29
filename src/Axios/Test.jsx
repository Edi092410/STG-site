import React, { useState, useEffect } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "http://8086.stg.mn",
  header: {
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
});

export const Test = () => {
  useEffect(() => {
    const initializeAxios = async () => {
      try {
        // Get CSRF cookie
        // await axios.get("/sanctum/csrf-cookie", {
        //   header: {
        //     "X-Requested-With": "XMLHttpRequest",
        //   },
        //   withCredentials: true,
        // });
        // console.log("CSRF cookie set");

        // Proceed with the login request
        // const data = await axios.get("/api/users", {
        //   headers: {
        //     "Content-type": "application/json",
        //     rejectUnauthorized: "false",
        //   },
        // });

        // const https = require("https");
        // const agent = new https.Agent({
        //   rejectUnauthorized: false,
        // });
        const data = axios.get(
          "/api/users",
          {
            headers: {
              "Content-type": "application/json",
            },
          }
          // { httpsAgent: agent }
        );

        console.log("Data: ", data);
        alert("Successful");
      } catch (err) {
        console.log("Error: ", err.response);
      }
    };
    initializeAxios();
  }, []);

  return (
    <div>
      <div>Hello</div>
    </div>
  );
};
