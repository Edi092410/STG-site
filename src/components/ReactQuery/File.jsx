import React from "react";
import { ReactQuery } from "./ReactQuery";
export const File = () => {
  const { post, isLoading } = ReactQuery("settings");

  return <div>{isLoading ? "Loading..." : console.log(post)}</div>;
};

// export const Text = (props) => {
//   return (
//     <div>{props.slogan}</div>
//   )
// }
