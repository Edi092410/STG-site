import React from "react";
import logo from "../../Assets/logo.jpg";
// import { ErrorStatus400 } from "../../pages/ErrorPages/ErrorStatus400";
// import { ServerErrorPage } from "../../pages/ErrorPages/ServerErrorPage";
// import { GenericErrorPage } from "../../pages/ErrorPages/GenericErrorPage";
import { Button } from "../Main/Button";
export const ErrorHandle = ({ error, resetErrorBoundary }) => {
  // <div>
  //   <h2>Something went wrong!</h2>
  //   <p>Error: {error.message}</p>
  //   <button onClick={resetErrorBoundary}>Try Again</button>
  // </div>;

  // switch (error?.response?.status) {
  //   case 500:
  //     return <ServerErrorPage />;
  //   case 400:
  //     return <ErrorStatus400 />;
  //   default:
  //     return <GenericErrorPage />;
  // }

  console.log("error", error);
  return (
    <div className="relative w-screen h-screen flex justify-center items-center text-6xl text-slate-700">
      <div>
        <div className="absolute inset-4 w-10">
          <img src={logo} className="rounded-full" />
        </div>
        <div>
          {error?.response?.status ? <p>{error?.response?.status} | </p> : null}
          <p> {error.message}</p>
        </div>
        {/* <div onClick={resetErrorBoundary}>Дахин ачаалах</div> */}
        <div className="w-full flex justify-center mt-4 ">
          <div className="text-base h-10" onClick={resetErrorBoundary}>
            <Button name={"Дахин ачаалах"} />
          </div>
        </div>
      </div>
    </div>
  );
};
