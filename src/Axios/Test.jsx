import React, { useState, useEffect } from "react";
import axios from "axios";

export const Test = () => {
  const api = axios.create({
    baseURL: "http://stgsite.mn/",
  });

  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     const getData = () => {
  //       axios
  //         .get("http://stgsite.mn/api/settings")
  //         .then(function (res) {
  //           setData(res.data);
  //           console.log(res.data);
  //         })
  //         .catch(function (err) {
  //           console.log(err);
  //         });
  //     };

  //     getData();
  //   }, []);

  //   return (
  //     <div className="w-screen h-screen flex justify-center items-center text-black">
  //       <div>{data.slogan}</div>
  //     </div>
  //   );

  const [post, setPost] = useState([]);

  useEffect(() => {
    api.get("/api/settings").then((data) => {
      console.log(data?.data?.data);
      setPost(data?.data?.data);
    });
  }, []);

  return (
    <div>
      {/* {post.map((item, i) => {
        return (
          <div key={i}>
            <p>{item?.slogan}</p>
          </div>
        );
      })} */}
      <div>Hello</div>
      <div>{post.slogan}</div>
    </div>
  );
};
